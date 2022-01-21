import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <small>
        Coded by{" "}
        <a
          href="https://nifty-clarke-f085a7.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Ana Martins
        </a>{" "}
        and is{" "}
        <a
          href="https://eloquent-morse-3bec8f.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced
        </a>{" "}
        on <i className="fab fa-github"></i>
      </small>
    </div>
  );
}
