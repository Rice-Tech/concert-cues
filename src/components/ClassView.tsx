import Card from "./Card";

interface Props {
    group: string;
    isClassView: boolean;
}

const ClassView = ({ group, isClassView }: Props) => {
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <Card group={group} isClassView={isClassView} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassView;
