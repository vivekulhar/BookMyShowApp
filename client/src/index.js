const React = require("react");
const ReactDOM = require("react-dom");
require("./index.css");
const App = require("./App");
const reportWebVitals = require("./reportWebVitals");
const store = require("./redux/store").default;
const Provider = require("react-redux").Provider;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
