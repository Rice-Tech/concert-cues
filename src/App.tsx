import RoleSelect from "./components/RoleSelect";
import { useState, ChangeEvent } from "react";
import ClassView from "./components/ClassView";
import CardGrid from "./components/CardGrid";

const groups = ["K-1", "K-2", "1-1", "1-2", "2-1", "2-2", "3-1", "3-2", "4-1", "4-2", "5-1", "5-2", "Choir", "Glee"];
    

function App() {
    const [selectedRole, setSelectedRole] = useState("");
    function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        setSelectedRole(event.target.value);
    }

    return (
        <>
            <h1>Concert Cues App</h1>
            <RoleSelect groups={groups} onChange={handleSelectChange}/>


            {selectedRole ? (
                selectedRole === "Caller" ? (
                    <CardGrid groups={groups} />
                ) : (
                    <ClassView group={selectedRole} isClassView={true} />
                )
            ) : (
                <></>
            )}
        </>
    );
}

export default App;
