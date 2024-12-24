import React, { useState } from "react";

const ResumeBuilder = () => {
  // Initialize resume structure using React state
  const [resume, setResume] = useState({
    title: "My Resume",
    sections: {
      // Build content off this
      name: "",
    },
    fortmat: "json",
  });

  const [sectionType, setSectionType] = useState("experience");
  const [fieldName, setFieldName] = useState("");
  const [fieldValue, setFieldValue] = useState("");

  // Handle adding a new section or updating an existing one
  const handleInputChange = (e) => {
    setFieldValue(e.target.value); // Track input field value
  };

  // Add new section to the resume (experience, awards, etc.)
  const handleAddSection = () => {
    setResume((prevResume) => {
      const updatedResume = { ...prevResume };
      // If section doesn't exist, initialize it as an empty array
      if (!updatedResume.sections[sectionType]) {
        updatedResume.sections[sectionType] = [];
      }
      updatedResume.sections[sectionType].push({ [fieldName]: fieldValue });
      return updatedResume;
    });

    // Clear field values after adding
    setFieldValue("");
    setFieldName("");
  };

  // Final submission (example: show the full resume in JSON format)
  const handleSubmit = () => {
    console.log(JSON.stringify(resume, null, 2)); // Print resume to console (or handle submission)
    alert("Resume Built! Check console.");
  };

  return (
    <div>
      <h1>Resume Builder</h1>

      {/* Section Type Selector */}
      <select
        onChange={(e) => setSectionType(e.target.value)}
        value={sectionType}
      >
        <option value="experience">Experience</option>
        <option value="awards">Awards</option>
        <option value="education">Education</option>
      </select>

      {/* Field Name Input */}
      <input
        type="text"
        placeholder="Field name (e.g., job title)"
        value={fieldName}
        onChange={(e) => setFieldName(e.target.value)}
      />

      {/* Dynamic Input for Section Fields */}
      <div>
        <input
          type="text"
          placeholder={sectionType === "education" ? "Degree" : "Title"}
          value={fieldValue}
          onChange={handleInputChange} // Track input field value
        />
        <button onClick={handleAddSection}>Add {sectionType}</button>
      </div>

      <button onClick={handleSubmit}>Finish and Print Resume</button>

      {/* Optional: Display the current resume */}
      <pre>{JSON.stringify(resume, null, 2)}</pre>
    </div>
  );
};

export default ResumeBuilder;
