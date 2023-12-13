import { ChangeEvent, useState } from "react";
import CardGrid from "./CardGrid";

import ClassView from "./ClassView";

const RoleSelect = () => {
    const [selectedRole, setSelectedRole] = useState("");

    const groups = ["K-1", "K-2", "1-1", "1-2", "2-1", "2-2", "3-1", "3-2", "4-1", "4-2", "5-1", "5-2", "Choir", "Glee"];
    function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        setSelectedRole(event.target.value);
    }
    return (
        <>
            <select
                className="form-select form-select-lg mb-3"
                aria-label="Large select example"
                defaultValue={""}
                onChange={handleSelectChange}
            >
                <option value="">Select your class or role</option>
                {groups.map((group) => (
                    <option value={group} key={group}>
                        {group}
                    </option>
                ))}
                <option value="Caller">Caller</option>
            </select>
            {selectedRole ? (
                selectedRole === "Caller" ? (
                    <CardGrid groups= {groups}/>
                ) : (
                    <ClassView group={selectedRole} isClassView={true} />
                )
            ) : (
                <></>
            )}
        </>
    );
};

export default RoleSelect;
