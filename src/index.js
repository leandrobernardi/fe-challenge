import React from "react"
import ReactDOM from "react-dom/client"
import Layout from "./components/Layout"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import { legacy_createStore as createStore } from "redux"
import { I18nextProvider } from "react-i18next"
import i18n from "./i18n"
import reducer from "./state/reducers"
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Layout />
    </Provider>
  </I18nextProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
