import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import AudioPlayer from "./AudioPlayer";
import YouTube from "./YouTube";

interface Props {
    group: string;
    isClassView: boolean;
}

const Card = ({ group, isClassView }: Props) => {
    const [isCalled, setCalled] = useState(false);

    async function setData(value: boolean) {
        const groupRef = doc(db, "groups", group);
        await setDoc(groupRef, { status: value }, { merge: true });
        console.log("Set data");
    }

    useEffect(() => {
        const fetchData = async () => {
            const groupRef = doc(db, "groups", group);
            const unSub = onSnapshot(groupRef, (doc) => {
                if (doc.exists()) {
                    setCalled(doc.data().status);
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document! Will Create");
                    setData(isCalled);
                }
            });
            return () => {
                // Unsubscribe when the component unmounts
                console.log("Unsubscribing");
                unSub();
            };
        };
        fetchData();
    }, [group]);

    function handleClick() {
        setData(!isCalled);
        setCalled(!isCalled);
    }
    return (
        <div
            className="card"
            style={isClassView ? { maxWidth: "70vw" } : { maxWidth: "100px" }}
        >
            <div
                className={
                    isCalled
                        ? "card-header bg-danger text-light"
                        : "card-header bg-secondary-subtle"
                }
            >
                {group}
            </div>
            <div className="card-body">
                {isCalled || !isClassView ? (
                    <ToggleButton
                        isToggled={isCalled}
                        falseLabel="Call Class"
                        trueLabel={isClassView ? "On our way!" : "Clear"}
                        onClick={handleClick}
                    />
                ) : (
                    <h2>
                        The video will disappear when your class is called to
                        sing.
                    </h2>
                )}
                {isClassView && <AudioPlayer isPlaying={isCalled} />}
                {isClassView &&
                    (isCalled ? (
                        <h2>Time to sing! I know you will sound amazing!</h2>
                    ) : (
                        <YouTube />
                    ))}
            </div>
        </div>
    );
};

export default Card;
