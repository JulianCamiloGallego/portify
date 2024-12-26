import React, { useState } from "react";
import getSectionTemplate from "./utils";
import PersonalDetails from "../sections/personalDetails";
import WorkExperience from "../sections/workExperience";
import Education from "../sections/education";
import Project from "../sections/project";
import Skill from "../sections/skill";
import Certificate from "../sections/certificate";
import Language from "../sections/language";
import Award from "../sections/awards";
import { PDFViewer } from "@react-pdf/renderer";
import MyResumePdf from "./myResumePdf";

const ResumeBuilder = () => {
  const [resume, setResume] = useState({
    title: "",
    sections: {},
    format: "json",
  });

  const sectionTypes = [
    "personalDetails",
    "workExperience",
    "education",
    "projects",
    "skills",
    "certificates",
    "languages",
    "awards",
  ];
  const [selectedSections, setSelectedSections] = useState([]);

  const handleAddSection = (section) => {
    setSelectedSections((prevState) => [...prevState, section]);

    const sectionDefinition = getSectionTemplate(section);
    setResume((prevState) => ({
      ...prevState,
      sections: {
        ...prevState.sections,
        [section]: Array.isArray(sectionDefinition.fields)
          ? sectionDefinition.fields
          : { ...sectionDefinition.fields },
      },
    }));
  };

  const handleAddEntry = (section, entry) => {
    setResume((prevState) => ({
      ...prevState,
      sections: {
        ...prevState.sections,
        [section]: [...prevState.sections[section], ...entry],
      },
    }));
  };

  const handleFieldChange = (section, field, value, index = 0) => {
    setResume((prevState) => {
      if (section === "personalDetails") {
        return {
          ...prevState,
          sections: {
            ...prevState.sections,
            [section]: {
              ...prevState.sections[section],
              [field]: value,
            },
          },
        };
      } else {
        return {
          ...prevState,
          sections: {
            ...prevState.sections,
            [section]: prevState.sections[section].map((entry, i) => {
              // For each entry in a section, either return the entry
              // or update the field with value if the indices match
              if (i === index) {
                return { ...entry, [field]: value };
              }
              return entry;
            }),
          },
        };
      }
    });
  };

  const handleSaveResume = () => {
    setSelectedSections([]);
    setResume({
      title: "",
      sections: {},
      format: "json",
    });
  };

  const getSectionFieldsData = (section) => {
    return resume.sections[section];
  };

  return (
    <div>
      <h1>Resume Builder</h1>
      <div>
        {sectionTypes.map((section, index) => (
          <button key={index} onClick={() => handleAddSection(section)}>
            {section}
          </button>
        ))}
        {selectedSections.includes("personalDetails") && (
          <PersonalDetails
            fieldsData={getSectionFieldsData("personalDetails")}
            onFieldChange={handleFieldChange}
          />
        )}
        {selectedSections.includes("workExperience") && (
          <WorkExperience
            entries={getSectionFieldsData("workExperience")}
            onAddEntry={handleAddEntry}
            onFieldChange={handleFieldChange}
          />
        )}
        {selectedSections.includes("education") && (
          <Education
            entries={getSectionFieldsData("education")}
            onAddEntry={handleAddEntry}
            onFieldChange={handleFieldChange}
          />
        )}
        {selectedSections.includes("projects") && (
          <Project
            entries={getSectionFieldsData("projects")}
            onAddEntry={handleAddEntry}
            onFieldChange={handleFieldChange}
          />
        )}
        {selectedSections.includes("skills") && (
          <Skill
            entries={getSectionFieldsData("skills")}
            onAddEntry={handleAddEntry}
            onFieldChange={handleFieldChange}
          />
        )}
        {selectedSections.includes("certificates") && (
          <Certificate
            entries={getSectionFieldsData("certificates")}
            onAddEntry={handleAddEntry}
            onFieldChange={handleFieldChange}
          />
        )}
        {selectedSections.includes("languages") && (
          <Language
            entries={getSectionFieldsData("languages")}
            onAddEntry={handleAddEntry}
            onFieldChange={handleFieldChange}
          />
        )}
        {selectedSections.includes("awards") && (
          <Award
            entries={getSectionFieldsData("awards")}
            onAddEntry={handleAddEntry}
            onFieldChange={handleFieldChange}
          />
        )}
      </div>
      <h2>PDF Preview</h2>
      {/** PDFViewer seems to be breaking on state update */}
      {typeof window !== "undefined" && (
        <PDFViewer style={{ width: "100%", height: "700px" }}>
          <MyResumePdf resume={resume} />
        </PDFViewer>
      )}
      <button onClick={() => handleSaveResume()}>Save</button>
    </div>
  );
};

// <h2>Resume preview</h2>
// <pre style={{ whiteSpace: "pre-wrap" }}>
// {JSON.stringify(resume, null, 2)}
// </pre>

export default ResumeBuilder;
