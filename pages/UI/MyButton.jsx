import React, { children } from "react";

const MyButton = ({ children }) => {
  return <button className="myBtn hover:opacity-90 hover:scale-110 transition-all ">{children}</button>;
};

export default MyButton;
