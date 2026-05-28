"use client";
import React, { useState } from "react";

const menuItems = [
  "Dashboard",
  "AI Test Generator",
  "Code Review",
  "Log Analyzer",
  "Risk Predictor",
  "Checklist",
];

export default function Page() {
  const [selected, setSelected] = useState<string>("Dashboard");

  const renderContent = () => {
    switch (selected) {
      case "Dashboard":
        return (
          <div>
            <h2>Deployment Health</h2>
            <p>Pods Running: 120 ✅</p>
            <p>Failed Deployments: 5 ❌</p>
          </div>
        );

      case "AI Test Generator":
        return (
          <div>
            <textarea placeholder="Paste Java class..." style={{width:"100%",height:"200px"}}/>
            <br /><br />
            <button>Generate JUnit</button>
          </div>
        );

      case "Code Review":
        return (
          <div>
            <textarea placeholder="Paste code..." style={{width:"100%",height:"200px"}}/>
            <br /><br />
            <button>Analyze</button>
          </div>
        );

      case "Log Analyzer":
        return (
          <div>
            <textarea placeholder="Paste logs..." style={{width:"100%",height:"200px"}}/>
            <br /><br />
            <button>Analyze Logs</button>
          </div>
        );

      case "Risk Predictor":
        return <h3 style={{color:"red"}}>High Risk (78%)</h3>;

      case "Checklist":
        return (
          <ul>
            <li>✔ Firewall rules updated</li>
            <li>✔ DB migration done</li>
            <li>✔ Backup verified</li>
          </ul>
        );

      default:
        return <p>Module UI</p>;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      
      {/* Sidebar */}
      <div style={{ width: "250px", background: "#f4f4f4", padding: "10px" }}>
        <h2>ECC</h2>
        {menuItems.map((item) => (
          <div
            key={item}
            onClick={() => setSelected(item)}
            style={{
              padding: "10px",
              cursor: "pointer",
              background: selected === item ? "#dbeafe" : "",
              marginBottom: "5px",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Engineering Command Center</h1>
        {renderContent()}
      </div>
    </div>
  );
}
