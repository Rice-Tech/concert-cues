import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

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
  async function fetchData() {
    const groupRef = doc(db, "groups", group);
    const docSnap = await getDoc(groupRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().status);
      setCalled(docSnap.data().status);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document! WIll Create");
      setData(isCalled);
    }
    return docSnap;
  }

  useEffect(() => {
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
      </div>
    </div>
  );
};

export default Card;
