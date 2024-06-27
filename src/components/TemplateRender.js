import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";
import Template1 from "./resume/Template1"
import Template2 from "./resume/Template2"
import Template3 from "./resume/Template3"
import Template4 from "./resume/Template4"
import Template5 from "./resume/Template5"
import Template6 from "./resume/Template6"
import Template7 from "./resume/Template7"
import Template8 from "./resume/Template8"
import Template9 from "./resume/Template9"
import Template10 from "./resume/Template10"
import Template11 from "./resume/Template11"
import Template12 from "./resume/Template12"
import Template13 from "./resume/Template13"
import Template14 from "./resume/Template14"
import Template15 from "./resume/Template15"
import Template16 from "./resume/Template16"
import Template17 from "./resume/Template17"
import Template18 from "./resume/Template18"
import Template19 from "./resume/Template19"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/template1" element={<Template1 />} />
        <Route path="/template2" element={<Template2 />} />
        <Route path="/template3" element={<Template3 />} />
        <Route path="/template4" element={<Template4 />} />
        <Route path="/template5" element={<Template5 />} />
        <Route path="/template6" element={<Template6 />} />
        <Route path="/template7" element={<Template7 />} />
        <Route path="/template8" element={<Template8 />} />
        <Route path="/template9" element={<Template9 />} />
        <Route path="/template10" element={<Template10 />} />
        <Route path="/template11" element={<Template11 />} />
        <Route path="/template12" element={<Template12 />} />
        <Route path="/template13" element={<Template13 />} />
        <Route path="/template14" element={<Template14 />} />
        <Route path="/template15" element={<Template15 />} />
        <Route path="/template16" element={<Template16 />} />
        <Route path="/template17" element={<Template17 />} />
        <Route path="/template18" element={<Template18 />} />
        <Route path="/template19" element={<Template19 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
