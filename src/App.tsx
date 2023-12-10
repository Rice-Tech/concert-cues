import RoleSelect from "./components/RoleSelect";
import SignIn from "./components/SignIn";
function App() {
    const user = true;
    return (
        <>
            <h1>Concert Cues App</h1>
            {user ? <RoleSelect /> : <SignIn />}
        </>
    );
}

export default App;
