import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "../containers/Layout";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { PasswordRecovery } from "../pages/PasswordRecovery";
import { SendEmail } from "../pages/SendEmail";
import { NewPassword } from "../pages/NewPassword";
import { MyAccount } from "../pages/MyAccount";
import { CreateAccount } from "../pages/CreateAccount";
import { Checkout } from "../pages/Checkout";
import { Orders } from "../pages/Orders";
import { NotFound } from "../pages/NotFound";

import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/password-recovery" element={<PasswordRecovery />} />
          <Route path="/send-email" element={<SendEmail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
