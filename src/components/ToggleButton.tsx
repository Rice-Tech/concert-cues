interface Props {
  isToggled: boolean;
  trueLabel: string;
  falseLabel: string;
  onClick: () => void;
}

const ToggleButton = ({ isToggled, trueLabel, falseLabel, onClick }: Props) => {
  return (
    <button
      type="button"
      className={"btn " + (isToggled ? "btn-secondary" : "btn btn-danger")}
      onClick={onClick}
    >
      {isToggled ? trueLabel : falseLabel}
    </button>
  );
};

export default ToggleButton;
