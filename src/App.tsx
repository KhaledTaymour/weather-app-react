import "./App.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTemperature } from "redux/actions/weatherActions";

function App() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getTemperature());
  }, []);

  return (
    <div className="App">
      <header className="App-header">{`weather app react`}</header>
    </div>
  );
}

export default App;
