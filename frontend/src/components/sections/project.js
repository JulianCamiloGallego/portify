import React from "react";
import getSectionTemplate from "../resumeBuilder/utils";

const Project = ({ entries, onAddEntry, onFieldChange }) => {
  const SECTION = "projects";

  const handleFielChange = (field, event, index) => {
    onFieldChange(SECTION, field, event.target.value, index);
  };

  return (
    <div>
      <h2>Projects</h2>
      {entries.map((entry, index) => (
        <div key={index}>
          <h4>{index + 1}</h4>
          <label>name: </label>
          <input
            type="text"
            value={entry.name}
            onChange={(e) => {
              handleFielChange("name", e, index);
            }}
          />
          <br />
          <label>Start Date: </label>
          <input
            type="text"
            value={entry.startDate}
            onChange={(e) => {
              handleFielChange("startDate", e, index);
            }}
          />
          <br />
          <label>End Date: </label>
          <input
            type="text"
            value={entry.endDate}
            onChange={(e) => {
              handleFielChange("endDate", e, index);
            }}
          />
          <br />
          <label>Link: </label>
          <input
            type="checkbox"
            checked={entry.link}
            onChange={(e) => handleFielChange("link", e, index)}
          />
          <br />
          <label>Description: </label>
          <input
            type="text"
            value={entry.description}
            onChange={(e) => {
              handleFielChange("description", e, index);
            }}
          />
          <br />
        </div>
      ))}

      <button
        onClick={() => onAddEntry(SECTION, getSectionTemplate(SECTION).fields)}
      >
        +
      </button>
    </div>
  );
};

export default Project;
