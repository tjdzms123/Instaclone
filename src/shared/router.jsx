import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../UI/pages/Login';
import Main from '../UI/pages/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/main"
          element={<Main />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
