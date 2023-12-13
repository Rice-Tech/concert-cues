import Card from "./Card";

const CardGrid = () => {
    const groups = ["K", "1st", "2nd", "3rd", "4th", "5th", "Choir", "Glee"];

    return (
        <>
            <div className="container text-center">
                <div className="row">
                    {groups.map((item) => (
                        <div className="col" key={item + "col"}>
                            <Card
                                group={item}
                                key={item + "card"}
                                isClassView={false}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardGrid;
