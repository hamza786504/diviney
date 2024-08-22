import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoGrapics from "./components/InfoGrapics.jsx";
import NotFound from "./components/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/register.jsx";
import ProfileView from "./pages/admin/ProfileView.jsx";
import ChatRoom from "./pages/admin/ChatRoom.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route path="/admin/profileview" exact element={<ProfileView />}></Route>
        <Route path="/admin/chatroom" exact element={<ChatRoom />}></Route>


        <Route path="/404" exact element={<NotFound />}></Route>



        <Route path="/philosopher/:id?" exact element={<InfoGrapics />}></Route>
        <Route path="/add" exact element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
