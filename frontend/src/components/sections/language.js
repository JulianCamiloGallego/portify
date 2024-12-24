import React from "react";
import getSectionTemplate from "../resumeBuilder/utils";

const Language = ({ entries, onAddEntry, onFieldChange }) => {
  const SECTION = "languages";

  const handleFielChange = (field, event, index) => {
    onFieldChange(SECTION, field, event.target.value, index);
  };

  return (
    <div>
      <h2>Languages</h2>
      {entries.map((entry, index) => (
        <div key={index}>
          <h4>{index + 1}</h4>
          <label>Name: </label>
          <input
            type="text"
            value={entry.name}
            onChange={(e) => {
              handleFielChange("name", e, index);
            }}
          />
          <br />
          <label>Proficiency: </label>
          <input
            type="text"
            value={entry.proficiency}
            onChange={(e) => {
              handleFielChange("proficiency", e, index);
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

export default Language;
