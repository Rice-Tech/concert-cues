import { ChangeEvent } from "react";


interface Props {
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    groups: string[];
}

const RoleSelect = ({ onChange, groups }: Props) => {
    return (
        <>
            <select
                className="form-select form-select-lg mb-3"
                aria-label="Large select example"
                defaultValue={""}
                onChange={onChange}
            >
                <option value="">Select your class or role</option>
                {groups.map((group) => (
                    <option value={group} key={group}>
                        {group}
                    </option>
                ))}
                <option value="Caller">Caller</option>
            </select>
            
        </>
    );
};

export default RoleSelect;
