"use client";
import React, { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Engineering Command Center</h1>

      <h3>Dashboard</h3>
      <p>Pods Running: 120 ✅</p>
      <p>Failed Deployments: 5 ❌</p>

      <h3>AI Test Generator</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste Java class..."
        style={{ width: "100%", height: "150px" }}
      />

      <br /><br />
      <button>Generate</button>
    </div>
  );
}
``
