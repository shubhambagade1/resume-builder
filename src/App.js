import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import Template1 from "./components/resume/Template1"
import Template2 from "./components/resume/Template2"
import Template3 from "./components/resume/Template3"
import Template4 from "./components/resume/Template4"
import Template5 from "./components/resume/Template5"
import Template6 from "./components/resume/Template6"
import Template7 from "./components/resume/Template7"
import Template8 from "./components/resume/Template8"
import Template9 from "./components/resume/Template9"
import Template10 from "./components/resume/Template10"
import Template11 from "./components/resume/Template11"


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

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
