import "./App.css";
import Taska from "./components/Taska";
import UserProfile from "./components/TaskB/UserProfile";
import Taskc from "./components/Taskc";
import Taskd from "./components/Taskd";
import Taske from "./components/Taske";
import Taskf from "./components/Taskf";
import Card from "./components/TaskG/Card";
import Taskh from "./components/Taskh";


function App() {
  return (
    <>
      <Taska />
      <hr />
      <UserProfile
        Name="Amitabh Bachchan"
        Image="https://flxt.tmsimg.com/assets/4153_v9_bc.jpg"
        Bio="Actor"
      />
      <hr />
      <Taskc />
      <hr />
      <Taskd />
      <hr />
      <Taske />
      <hr />
      <Taskf />
      <hr />
      <Card />
      <hr />
      <Taskh />
      <hr />
    </>
  );
}

export default App;

