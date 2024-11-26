import React from "react";
import "../assets/css/jobCard.css";
import { Link } from "react-router-dom";

function JobCard({ logo, companyName, jobTitle, vacancies, requirements, applicants }) {
  return (
    <div className="job-card">
      <div className="company-logo">
        <img src={logo} alt={`${companyName} logo`} />
      </div>
      <div className="job-info">
        <h3>{jobTitle}</h3>
        <p className="company-name">{companyName}</p>
        <p><strong>Vagas:</strong> {vacancies}</p>
        <p><strong>Requisitos:</strong> {requirements.join(",")}</p>
        <p><strong>Candidatos Inscritos:</strong> {applicants}</p>
      </div>
      <Link to={"jobs-details"} className="apply-button">Saiba mais</Link>
    </div>
  );
}

export default JobCard;
