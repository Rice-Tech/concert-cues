import Card from "./Card";

const CardGrid = () => {
  const classes = ["1st", "2nd", "3rd", "4th"];

  return (
    <>
      <div className="container text-center">
        <div className="row">
          {classes.map((item) => (
            <div className="col" key={item + "col"}>
              <Card group={item} key={item + "card"} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardGrid;
