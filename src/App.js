import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div>
      <Card cardColor="red" height={200} width={400} />
      <Card />
      <Card cardColor="green" />
    </div>
  );
}

export default App;
