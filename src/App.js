import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { InboxScreen } from "./components/InboxScreen";
function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
