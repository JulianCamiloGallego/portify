import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// PDF Resume Component
const MyResumePdf = ({ resume }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {resume.sections.personalDetails && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Details</Text>
            <Text>{resume.sections.personalDetails.name}</Text>
            <Text>{resume.sections.personalDetails.summary}</Text>
            <Text>{resume.sections.personalDetails.email}</Text>
            <Text>{resume.sections.personalDetails.phone}</Text>
            <Text>{resume.sections.personalDetails.web1}</Text>
            <Text>{resume.sections.personalDetails.web2}</Text>
            <Text>{resume.sections.personalDetails.location}</Text>
          </View>
        )}
        {resume.sections.workExperience && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {resume.sections.workExperience.map((job, index) => (
              <View key={index} style={styles.entry}>
                <Text>{job.company}</Text>
                <Text>{job.jobTitle}</Text>
                <Text>
                  {job.startDate} - {job.endDate}
                </Text>
                <Text>{job.currentPosition}</Text>
                <Text>{job.description}</Text>
              </View>
            ))}
          </View>
        )}
        {resume.sections.education && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resume.sections.education.map((school, index) => (
              <View key={index} style={styles.entry}>
                <Text>{school.school}</Text>
                <Text>
                  {school.startDate} - {school.endDate}
                </Text>
                <Text>{school.degree}</Text>
                <Text>{school.description}</Text>
              </View>
            ))}
          </View>
        )}
        {resume.sections.projects && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {resume.sections.projects.map((project, index) => (
              <View index={index} style={styles.entry}>
                <Text>{project.name}</Text>
                <Text>
                  {project.startDate} - {project.endDate}
                </Text>
                <Text>{project.link}</Text>
                <Text>{project.description}</Text>
              </View>
            ))}
          </View>
        )}
        {resume.sections.skills && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            {resume.sections.skills.map((s, index) => (
              <View index={index} style={styles.entry}>
                <Text>{s.skill}</Text>
              </View>
            ))}
          </View>
        )}
        {resume.sections.certificates && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certificates</Text>
            {resume.sections.certificates.map((c, index) => (
              <View index={index} style={styles.entry}>
                <Text>{c.title}</Text>
                <Text>{c.link}</Text>
                <Text>{c.description}</Text>
              </View>
            ))}
          </View>
        )}
        {resume.sections.languages && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            {resume.sections.languages.map((l, index) => (
              <View index={index} style={styles.entry}>
                <Text>{l.name}</Text>
                <Text>{l.proficiency}</Text>
              </View>
            ))}
          </View>
        )}
        {resume.sections.awards && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Awards</Text>
            {resume.sections.awards.map((a, index) => (
              <View index={index} style={styles.entry}>
                <Text>{a.title}</Text>
                <Text>{a.issuer}</Text>
                <Text>{a.description}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: "1px solid #ddd",
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    textDecoration: "underline",
  },
  entry: {
    marginBottom: 10,
  },
});

export default MyResumePdf;
