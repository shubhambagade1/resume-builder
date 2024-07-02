import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/data-scientist-5.css';
import html2pdf from 'html2pdf.js';
import dummyimg from '../../images/dummyimg.jpg';

const DataScientist5 = () => {

    const [profileImg, setProfileImg] = useState(dummyimg);
    const handleProfileImgChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setProfileImg(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const downloadPDF = () => {
        const element = document.getElementsByClassName('datascientist-5-container')[0];
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='datascientist-5-main-wrapper'>
            <div className="datascientist-5-container" contentEditable="true">
                <div className="datascientist-5-header">
                    <img className='datascientist-5-profile-image'
                        src={profileImg}
                        alt="Profile"
                        onClick={() => document.getElementById('profilePhotoInput').click()}
                    />
                    <input
                        type="file"
                        id="profilePhotoInput"
                        accept="image/*"
                        onChange={handleProfileImgChange}
                        style={{ display: 'none' }}
                    />
                    <div className="datascientist-5-header-text">
                        <h1 contentEditable="true">Diana Dawa</h1>
                        <h2 contentEditable="true">Data Scientist</h2>
                        <p contentEditable="true">
                            Data Scientist with 4+ years of broad-based experience in building data-intensive applications, overcoming complex architectural, and scalability issues in diverse industries. Proficient in predictive modeling, data processing, and data mining algorithms, as well as scripting languages, including Python and Java. Capable of creating, developing, testing, and deploying highly adaptive diverse services to translate business and functional qualifications into substantial deliverables.
                        </p>
                    </div>
                </div>
                <div className='datascientist-5-contact'>
                    <div className="datascientist-5-contact-left">
                        <p contentEditable="true"><FaEnvelope /> diana@novoresume.com</p>
                        <p contentEditable="true"><FaPhone /> 044 412 2020</p>
                        <p contentEditable="true"><FaMapMarkerAlt />Palo Alto, CA</p>
                    </div>
                    <div className='datascientist-5-contact-right'>
                        <p contentEditable="true">
                            <FaLinkedin /> <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                your wesite
                            </a>
                        </p>
                        <p contentEditable="true">
                            <FaLinkedin /> <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                                LinkedIn Profile
                            </a>
                        </p>
                    </div>
                </div>
                <div className='datascientist-5-content-div'>
                    <div className='datascientist-5-content-left'>
                        <section className="datascientist-5-work-experience">
                            <p className='datascientist-5-sections-title'>Work Experience</p>
                            <div className="datascientist-5-job">
                                <p contentEditable="true">Data Scientist</p>
                                <p contentEditable="true">Future Energy Ltd.</p>
                                <p contentEditable="true">Palo Alto, CA</p>
                                <p contentEditable="true">06/2018 - Present</p>
                                <ul contentEditable="true">
                                    <li>Develop action plans to mitigate risks in decision making while increasing profitability by leveraging data science.</li>
                                    <li>Drive the interaction and partnership between the managers to ensure active cooperation in identifying as well as defining analytical needs, and generating the pull-through of insights with the business.</li>
                                    <li>Demonstrate knowledge and execution of application programming interface development and test automation.</li>
                                </ul>
                            </div>
                            <div className="datascientist-5-job">
                                <p contentEditable="true">Data Analyst</p>
                                <p contentEditable="true">THETA Financial Group</p>
                                <p contentEditable="true">San Francisco, CA</p>
                                <p contentEditable="true">01/2016 - 05/2018</p>
                                <ul contentEditable="true">
                                    <li>Actively engaged in the quantitative analysis of sophisticated modeling to address business issues.</li>
                                </ul>
                            </div>
                            <div className="datascientist-5-job">
                                <p contentEditable="true">Business Analyst / Statistician</p>
                                <p contentEditable="true">Maxicare Healthcare</p>
                                <p contentEditable="true">02/2013 - 12/2015</p>
                                <ul contentEditable="true">
                                    <li>Led training sessions on the software developed and presented it to the management for approval of deployment.</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className='datascientist-5--content-right'>
                        <section className="datascientist-5-skills">
                            <p className='datascientist-5-sections-title'>General Skills</p>
                            <div className="datascientist-5-skills-grid">
                                <span contentEditable="true">Data Visualization</span>
                                <span contentEditable="true">Machine Learning</span>
                                <span contentEditable="true">Deep Learning</span>
                                <span contentEditable="true">Pattern Recognition</span>
                                <span contentEditable="true">Database Structures & Algorithms</span>
                                <span contentEditable="true">Statistical Analysis</span>
                                <span contentEditable="true">Data Preparation</span>
                                <span contentEditable="true">Quality Management</span>
                                <span contentEditable="true">Agile Methodologies</span>
                            </div>
                        </section>
                        <section className="datascientist-5-skills">
                            <p className='datascientist-5-sections-title'>Technical Skills</p>
                            <ul contentEditable="true">
                                <li><strong>Operating System:</strong> Windows, MacOS, Linux</li>
                                <li><strong>Database/Server:</strong> My SQL, Postgres, SQL Server</li>
                                <li><strong>Programming Language:</strong> Python, scikit-learn, Python, OpenCV, D3.js, H2O.ai, Spark, Hadoop, R Programming, Django, Angular.js, HTML, SQL, JavaScript, PHP</li>
                                <li><strong>Other Software/Tools:</strong> Tableau, Deep Learning, Machine Learning, IP Cameras, AWS Services, Microsoft Azure</li>
                            </ul>
                        </section>
                        <section className="datascientist-5-certificates">
                            <p className='datascientist-5-sections-title'>Certificates</p>
                            <ul contentEditable="true">
                                <li>Certification for Applied Data Analytics (2019)</li>
                                <li>Cloudera Data Science Essentials Certificate (2018)</li>
                                <li>Essentials of High Performance and Parallel Statistical Computing with R (2018)</li>
                            </ul>
                        </section>

                        <section className="datascientist-5-education">
                            <p className='datascientist-5-sections-title'>Education</p>
                            <div contentEditable="true">
                                <p>Master of Science in Computer Science and Informatics</p>
                                <p>San Francisco University</p>
                                <p>2014 - 2016</p>
                            </div>
                        </section>
                        <section className="datascientist-5-interests">
                            <p className='datascientist-5-sections-title'>Interests</p>
                            <div className="datascientist-5-interests-grid">
                                <span contentEditable="true">Video Games</span>
                                <span contentEditable="true">Music</span>
                                <span contentEditable="true">Renewable Energy</span>
                                <span contentEditable="true">Artificial Intelligence</span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default DataScientist5;
