import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { store } from "./Redux";

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);