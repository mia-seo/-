import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Nav from "./Components/Nav/Nav";
import Chat from "./Pages/Chat/Chat";
import DetailPage from "./Pages/Map/DetailPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
