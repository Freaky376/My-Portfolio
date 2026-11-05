import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="github-calendar">
      <h2 className="section-title mt-section">GitHub activity</h2>
      <GitHubCalendar
        username="Freaky376"
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        theme={{
          level0: "#161f35",
          level1: "#0f5e50",
          level2: "#16917a",
          level3: "#2cc4a5",
          level4: "#48f1cc",
        }}
      />
    </div>
  );
}

export default Github;
