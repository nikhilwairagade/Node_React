import React from "react";
import { Outer } from "./style";

export const Dashboard = ({ heading }) => {
  return (
    <Outer>
      <div className="header">
        <h3 className="logo" >{heading}</h3>
      </div>
      <div style={{display: "flex"}}>
        <div className="sidebar">
          <ul>
            <ol id="dashboard">
              <span className="sidebarTitle"> Dashboard</span>
            </ol>
          </ul>
        </div>
        <div className="outer">
        </div>
      </div>
    </Outer>
  );
};
