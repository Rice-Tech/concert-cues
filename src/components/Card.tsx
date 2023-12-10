import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import AudioPlayer from "./AudioPlayer";

interface Props {
  group: string;
}

const Card = ({ group }: Props) => {
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
  }, []);

  function handleClick() {
    setData(!isCalled);
    setCalled(!isCalled);
  }
  return (
    <div className="card">
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
        <ToggleButton
          isToggled={isCalled}
          falseLabel="Call Class"
          trueLabel="Clear"
          onClick={handleClick}
        />
        <AudioPlayer isPlaying={isCalled} />
      </div>
    </div>
  );
};

export default Card;
