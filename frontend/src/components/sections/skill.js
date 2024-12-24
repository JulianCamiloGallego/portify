import React from "react";
import getSectionTemplate from "../resumeBuilder/utils";

const Skill = ({ entries, onAddEntry, onFieldChange }) => {
  const SECTION = "skills";

  const handleFielChange = (field, event, index) => {
    onFieldChange(SECTION, field, event.target.value, index);
  };

  return (
    <div>
      <h2>Skills</h2>
      {entries.map((entry, index) => (
        <div key={index}>
          <h4>{index + 1}</h4>
          <label>Skill: </label>
          <input
            type="text"
            value={entry.skill}
            onChange={(e) => {
              handleFielChange("skill", e, index);
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

export default Skill;
