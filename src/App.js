import "./App.css";
import UserView from "./features/user/UserView";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/icecream/IceCreamView";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
