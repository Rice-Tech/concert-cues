import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";
import { getDatabase, ref, set, onValue } from "firebase/database";
import firebaseConfig from "../../firebaseConfig";
import { initializeApp } from "firebase/app";

interface Props {
  group: string;
}

const Card = ({ group }: Props) => {
  console.log("Tried to initialize");
  initializeApp(firebaseConfig);

  const [isCalled, setCalled] = useState(false);

  function writeClassState(referance: string, value: boolean) {
    console.log("Write function ran");
    const database = getDatabase();
    set(ref(database, referance), value);
  }

  const database = getDatabase();
  onValue(ref(database, group), (snapshot) => {
    console.log(group + " value changed.");
    setCalled(snapshot.val());
  });

  const handleClick = () => {
    console.log("clicked!");
    writeClassState(group, !isCalled);
    //setCalled(!isCalled);
  };
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
