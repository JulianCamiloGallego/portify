import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResumes } from "../redux/slices/resumeSlice";

const ResumeList = () => {
  const dispatch = useDispatch();
  const { resumes, loading, error } = useSelector((state) => state.resume);

  useEffect(() => {
    if (loading === null && resumes.length === 0) {
      dispatch(fetchResumes());
    }
  }, [loading, dispatch, resumes.length]);

  if (loading === "loading") return <p>Loading resumes...</p>;
  if (loading === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Resumes</h1>
      {resumes.map((resume) => (
        <div key={resume.id}>
          <h2>{resume.title}</h2>
          <p>{resume.content.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeList;
