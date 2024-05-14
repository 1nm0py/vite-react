import { Route, Routes } from "react-router-dom";
import Type from "./components/Type/Type";
import Home from "./components/Home/Home";
import Center from "./components/Centert/Center";
import Endl from "./components/End/Endl";
import Ftl_404 from "./components/Fatal/Ftl_404";

export default function App() {

  return (
    <>
      <Type />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/center" element={<Center />} />
        <Route path="/endl" element={<Endl />} />
        <Route path="*" element={<Ftl_404 />} />
      </Routes>
    </>
  )
}