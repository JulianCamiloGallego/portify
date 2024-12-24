import React from "react";
import getSectionTemplate from "../resumeBuilder/utils";

const WorkExperience = ({ entries, onAddEntry, onFieldChange }) => {
  const SECTION = "workExperience";

  const handleFielChange = (field, event, index) => {
    onFieldChange(SECTION, field, event.target.value, index);
  };

  return (
    <div>
      <h2>Work Experience</h2>
      {entries.map((entry, index) => (
        <div key={index}>
          <h4>{index + 1}</h4>
          <label>Company: </label>
          <input
            type="text"
            value={entry.company}
            onChange={(e) => {
              handleFielChange("company", e, index);
            }}
          />
          <br />
          <label>Job Title: </label>
          <input
            type="text"
            value={entry.jobTitle}
            onChange={(e) => {
              handleFielChange("jobTitle", e, index);
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
          <label>Current Position: </label>
          <input
            type="checkbox"
            checked={entry.currentPosition}
            onChange={(e) => handleFielChange("currentPosition", e, index)}
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

export default WorkExperience;
