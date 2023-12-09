import { useState } from "react";
import ToggleButton from "./ToggleButton";

interface Props {
  group: string;
}

const Card = ({ group }: Props) => {
  const [isCalled, setCalled] = useState(false);

  const handleClick = () => {
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
