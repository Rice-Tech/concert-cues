import { useState } from "react";
import ToggleButton from "./ToggleButton";
import { getDatabase, ref, set, onValue } from "firebase/database";

interface Props {
  group: string;
}

const Card = ({ group }: Props) => {
  const [isCalled, setCalled] = useState(false);

  function writeClassState(referance: string, value: boolean) {
    const database = getDatabase();
    set(ref(database, referance), value);
  }

  const database = getDatabase();
  onValue(ref(database, group), (snapshot) => {
    setCalled(snapshot.val());
  });

  const handleClick = () => {
    writeClassState(group, !isCalled);
    setCalled(!isCalled);
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
