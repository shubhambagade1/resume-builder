import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import html2pdf from 'html2pdf.js';
import '../styles/engineer-4.css';

const Engineer4 = () => {

    const downloadPDF = () => {
        const element = document.getElementsByClassName('engineer-4-container')[0];
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className="engineer-4-wrapper">
            <div className="engineer-4-container" id="engineer-4-resume" contentEditable="true">
                <div className="engineer-4-header">
                    <h1 className="engineer-4-name">BRIAN TEERG</h1>
                    <p className="engineer-4-title">Data Engineer</p>
                </div>
                <div className="engineer-4-content">
                    <div className="engineer-4-left-column">
                        <div className="engineer-4-contact-info">
                            <h2>CONTACT</h2>
                            <p><FaEnvelope /> b_teerg@email.com</p>
                            <p><FaPhone /> (123) 456-7890</p>
                            <p><FaMapMarkerAlt /> Brooklyn, NY</p>
                            <p><FaLinkedin /> LinkedIn</p>
                            <p><FaGithub /> Github</p>
                        </div>
                        <div className="engineer-4-section engineer-4-education">
                            <h2>EDUCATION</h2>
                            <p>B.A. Computer Science</p>
                            <p>University of Pittsburgh</p>
                            <p>September 2010 - April 2014</p>
                            <p>Pittsburgh, PA</p>
                        </div>
                        <div className="engineer-4-section engineer-4-skills">
                            <h2>SKILLS</h2>
                            <ul>
                                <li>Python</li>
                                <li>ETLs</li>
                                <li>SQL (Postgres, Redshift, MySQL)</li>
                                <li>NoSQL (MongoDB)</li>
                                <li>Spark, Kafka</li>
                                <li>Airflow</li>
                                <li>AWS (Athena, Lambda, S3)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="engineer-4-right-column">
                        <div className="engineer-4-section engineer-4-summary">
                            <h2>CAREER OBJECTIVE</h2>
                            <p>Data engineer experienced in building robust data pipelines that can scale to millions of concurrent users and data points. Looking to leverage my skillset to help Beyond Meat's mission to reduce meat consumption and stem carbon emissions.</p>
                        </div>
                        <div className="engineer-4-section engineer-4-experience">
                            <h2>WORK EXPERIENCE</h2>
                            <div className="engineer-4-experience-item">
                                <h3>Data Engineer</h3>
                                <p>Teachable, May 2018 - current, New York NY</p>
                                <ul>
                                    <li>Implemented a real-time data pipeline to process semi-structured data by integrating 120M raw records from 30+ data sources using Kafka and PySpark.</li>
                                    <li>Led the migration from Oracle to Redshift using Amazon Athena and S3, resulting in annual cost savings of $678K.</li>
                                    <li>Designed the data pipeline architecture for a new product that quickly scaled from 0 to 115,000 daily active users.</li>
                                </ul>
                            </div>
                            <div className="engineer-4-experience-item">
                                <h3>Data Engineer</h3>
                                <p>Mint, August 2016 - May 2018, New York NY</p>
                                <ul>
                                    <li>Maintained data pipeline up-time of 99.9% across 7 different primary data sources using Spark, Redshift, S3, and Python.</li>
                                    <li>Automated ETL processes across billions of rows of data which reduced manual workload by 33% monthly.</li>
                                    <li>Ingested data from disparate data sources using a combination of SQL, Google Analytics API, and Salesforce API using Python to create data views to be used in BI tools like Tableau.</li>
                                </ul>
                            </div>
                            <div className="engineer-4-experience-item">
                                <h3>Business Intelligence Intern</h3>
                                <p>MaSci, August 2014 - August 2016, New York NY</p>
                                <ul>
                                    <li>Worked with clients to understand business needs and translate into actionable reports in Tableau, saving 16 hours of manual work.</li>
                                    <li>Collaborated with 6 interns in weekly meetings to create better team output and efficiency.</li>
                                    <li>Used Spark in Python to distribute data processing on streaming datasets to improve ingestion and processing speed by 87%.</li>
                                    <li>Built ETL that ingested transactional data from a web app with 11,000 daily users that saved over $83K annually in vendor costs.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="download-section">
                <button className="downloadpdf-btn" onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Engineer4;
