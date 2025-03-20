/* 
  Om tat sat
  Hare Krishna
  Hari bol
*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ec1839",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </React.Fragment>
);
