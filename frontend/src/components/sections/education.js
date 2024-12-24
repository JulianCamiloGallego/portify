import React from "react";
import getSectionTemplate from "../resumeBuilder/utils";

const Education = ({ entries, onAddEntry, onFieldChange }) => {
  const SECTION = "education";

  const handleFielChange = (field, event, index) => {
    onFieldChange(SECTION, field, event.target.value, index);
  };

  return (
    <div>
      <h2>Education</h2>
      {entries.map((entry, index) => (
        <div key={index}>
          <h4>{index + 1}</h4>
          <label>School: </label>
          <input
            type="text"
            value={entry.school}
            onChange={(e) => {
              handleFielChange("school", e, index);
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
          <label>Degree: </label>
          <input
            type="checkbox"
            checked={entry.degree}
            onChange={(e) => handleFielChange("degree", e, index)}
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

export default Education;
