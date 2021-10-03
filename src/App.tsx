import React from "react";
import MyRouter from "routers/index";
// @ts-ignore
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <MyRouter />
      <MessengerCustomerChat
    pageId="116101687351405"
    appId="592310481806103"
  />
    </div>
  );
}


export default App;
