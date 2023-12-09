import CardGrid from "./components/CardGrid";
import SignIn from "./components/SignIn";
function App() {
  let user = true;
  return (
    <>
      <h1>Concert Cues App</h1>
      {user ? <CardGrid /> : <SignIn />}
    </>
  );
}

export default App;
