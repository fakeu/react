import React from "react";
import "./style.css";

function Header(props) {
  const { name, usersCount, msgCount, lastMsg } = props;

  return (
    <div className="header">
      <h1>{name}</h1>
      <div>
        <span>Users Online: </span>
        <span>{usersCount}</span>
      </div>
      <div>
        <span>Total messages: </span>
        <span>{msgCount}</span>
      </div>
      <div>
        <span>Last message: </span>
        <span>{lastMsg}</span>
      </div>
    </div>
  );
}

export default Header;
