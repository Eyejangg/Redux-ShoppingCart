import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Page from "./pages/page";
import { Provider } from "react-redux"; // แก้ไขการ import Provider ให้ถูกต้อง
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Page />
    </Provider>
  );
}

export default App;
