import Card from "./Card";

interface Props {
    groups: string[];
}
const CardGrid = ({ groups }: Props) => {
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
