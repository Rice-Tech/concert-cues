import { ChangeEvent, useState } from "react";
import CardGrid from "./CardGrid";
import Card from "./Card";

const RoleSelect = () => {
    const [selectedRole, setSelectedRole] = useState("");

    const groups = ["K", "1st", "2nd", "3rd", "4th", "5th"];
    function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        setSelectedRole(event.target.value);
    }
    return (
        <>
            <h3>{selectedRole}</h3>
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
                    <CardGrid />
                ) : (
                    <Card group={selectedRole} />
                )
            ) : (
                <></>
            )}
        </>
    );
};

export default RoleSelect;
