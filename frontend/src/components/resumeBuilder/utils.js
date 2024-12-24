const sectionsTemplates = [
  {
    type: "personalDetails",
    fields: {
      name: "",
      summary: "",
      email: "",
      phone: "",
      web1: "",
      web2: "",
      location: "",
    },
  },
  {
    type: "workExperience",
    fields: [
      {
        company: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        currentPosition: false,
        description: "",
      },
    ],
  },
  {
    type: "education",
    fields: [
      {
        school: "",
        startDate: "",
        endDate: "",
        degree: "",
        description: "",
      },
    ],
  },
  {
    type: "projects",
    fields: [
      {
        name: "",
        startDate: "",
        endDate: "",
        link: "",
        description: "",
      },
    ],
  },
  {
    type: "skills",
    fields: [
      {
        skill: "",
      },
    ],
  },
  {
    type: "certificates",
    fields: [
      {
        title: "",
        link: "",
        description: "",
      },
    ],
  },
  {
    type: "languages",
    fields: [
      {
        name: "",
        proficiency: "",
      },
    ],
  },
  {
    type: "awards",
    fields: [
      {
        title: "",
        issuer: "",
        description: "",
      },
    ],
  },
];

const getSectionTemplate = (type) => {
  const section = sectionsTemplates.find((s) => s.type === type);
  return section ? section : null;
};

export default getSectionTemplate;
