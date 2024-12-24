import React from "react";
import getSectionTemplate from "../resumeBuilder/utils";

const Award = ({ entries, onAddEntry, onFieldChange }) => {
  const SECTION = "awards";

  const handleFielChange = (field, event, index) => {
    onFieldChange(SECTION, field, event.target.value, index);
  };

  return (
    <div>
      <h2>Awards</h2>
      {entries.map((entry, index) => (
        <div key={index}>
          <h4>{index + 1}</h4>
          <label>Title: </label>
          <input
            type="text"
            value={entry.title}
            onChange={(e) => {
              handleFielChange("title", e, index);
            }}
          />
          <br />
          <label>Issuer: </label>
          <input
            type="text"
            value={entry.issuer}
            onChange={(e) => {
              handleFielChange("issuer", e, index);
            }}
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

export default Award;
