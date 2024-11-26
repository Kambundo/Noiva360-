import React from 'react';
import JobCard from '../component/JobCard';
import logoEmpresa from '../assets/img/favicon.png'
import "../assets/css/main.css";
export default function Index() {
  return (
    <div className='main-content'>
        <div className='center-elements'>

        <JobCard 
            logo= {logoEmpresa}  // URL da logo da empresa
            companyName="Unitel Ltd."     // Nome da empresa
            jobTitle="Desenvolvedor Frontend"     // Título da vaga
            vacancies={3}                         // Número de vagas
            requirements={[
            "Experiência com React",
            "Conhecimento em JavaScript",
            "HTML e CSS avançado"
            ]}                                    // Requisitos para o cargo
            applicants={12}                       // Número de candidatos inscritos
        />
         <JobCard 
            logo= {logoEmpresa}  // URL da logo da empresa
            companyName="Omatapalo Ltd."     // Nome da empresa
            jobTitle="Desenvolvedor Frontend"     // Título da vaga
            vacancies={3}                         // Número de vagas
            requirements={[
            "Experiência com React",
            "Conhecimento em JavaScript",
            "HTML e CSS avançado",
            ]}                                    // Requisitos para o cargo
            applicants={12}                       // Número de candidatos inscritos
        />

    <JobCard 


            logo= {logoEmpresa}  // URL da logo da empresa
            companyName="Unitel Ltd."     // Nome da empresa
            jobTitle="Desenvolvedor Frontend"     // Título da vaga
            vacancies={3}                         // Número de vagas
            requirements={[
            "Experiência com React",
            "Conhecimento em JavaScript",
            "HTML e CSS avançado"
            ]}                                    // Requisitos para o cargo
            applicants={12}                       // Número de candidatos inscritos
        />

    <JobCard 


    logo= {logoEmpresa}  // URL da logo da empresa
    companyName="Unitel Ltd."     // Nome da empresa
    jobTitle="Desenvolvedor Frontend"     // Título da vaga
    vacancies={3}                         // Número de vagas
    requirements={[
    "Experiência com React",
    "Conhecimento em JavaScript",
    "HTML e CSS avançado"
    ]}                                    // Requisitos para o cargo
    applicants={12}                       // Número de candidatos inscritos
    />

    <JobCard 


            logo= {logoEmpresa}  // URL da logo da empresa
            companyName="Unitel Ltd."     // Nome da empresa
            jobTitle="Desenvolvedor Frontend"     // Título da vaga
            vacancies={3}                         // Número de vagas
            requirements={[
            "Experiência com React",
            "Conhecimento em JavaScript",
            "HTML e CSS avançado"
            ]}                                    // Requisitos para o cargo
            applicants={12}                       // Número de candidatos inscritos
        />

    <JobCard 


    logo= {logoEmpresa}  // URL da logo da empresa
    companyName="Unitel Ltd."     // Nome da empresa
    jobTitle="Desenvolvedor Frontend"     // Título da vaga
    vacancies={3}                         // Número de vagas
    requirements={[
    "Experiência com React",
    "Conhecimento em JavaScript",
    "HTML e CSS avançado"
    ]}                                    // Requisitos para o cargo
    applicants={12}                       // Número de candidatos inscritos
    />

</div>

    </div>
  );
}
