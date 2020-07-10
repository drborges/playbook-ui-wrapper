import React from "react";
import { Card } from "playbook-ui";

import "./styles.scss";

console.log(">>>>", process.env.SASS_PATH, process.env.REACT_APP_SASS_PATH);

export default function App() {
  return (
    <div className="App">
      <Card>LOL</Card>
    </div>
  );
}
