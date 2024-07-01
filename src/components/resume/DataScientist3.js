import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/data-scientist-3.css';
import dummyimg from '../../images/dummyimg.jpg';
import html2pdf from 'html2pdf.js';

const DataScientist3 = () => {

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
        const element = document.getElementsByClassName('datascientist-template-3-container')[0];
        const opt = {
            filename: 'Management-resume-1.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };
    return (
        <div className='template-3-main-wrapper'>

            <div className="datascientist-template-3-container">
                <div className="datascientist-template-3-header">
                    <img className='datascientist-template-3-profile-image'
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
                    <div className="datascientist-template-3-header-text">
                        <h1>Felicia Blundell</h1>
                        <h2>Senior Data Scientist</h2>
                        <p>
                            Highly Experienced Data Scientist with 10+ Years of Experience Who Increased Marketing Campaign Effectiveness by 28%
                        </p>
                    </div>
                    <div className="datascientist-template-3-contact">
                        <p><FaPhone /> (+92) 1234-56789</p>
                        <p><FaEnvelope /> feliciablundell@gmail.com</p>
                        <p><FaLinkedin /> linkedin.com/felicia</p>
                        <p><FaGithub /> github/feliciablundell</p>
                    </div>
                </div>

                <section className="datascientist-template-3-summary">
                    <p>
                        Motivated data scientist with strong math background and research skills and 2+ years of experience using predictive modeling, data processing, and data mining.
                        Coming with advanced programming skills and a master’s degree in Statistics, seeking a position as a junior Data Scientist in Corp.
                    </p>
                </section>
                <section className="datascientist-template-3-skills">
                    <h2>Skills</h2>
                    <ul className="datascientist-template-3-skill-list">
                        <li>Python</li>
                        <li>R</li>
                        <li>Tableau</li>
                        <li>Machine Learning</li>
                        <li>Data Mining and Analysis</li>
                        <li>Communication</li>
                        <li>Critical Thinking</li>
                        <li>Time-Management</li>
                        <li>Research</li>
                        <li>Collaboration</li>
                    </ul>
                </section>
                <section className="datascientist-template-3-experience">
                    <h2>Work Experience</h2>
                    <div className="datascientist-template-3-job">
                        <h3>Data Scientist</h3>
                        <h4>ABC Company</h4>
                        <p>May 2018 - Present</p>
                        <ul>
                            <li>Developed algorithms based on deep-dive statistical analysis and predictive data modeling that were used to strengthen relationships, longevity and personalize interactions with clients.</li>
                            <li>Research, develop, prototype, and test new models and their related inputs and outputs; made any necessary corrections.</li>
                            <li>Improved data mining process, decreasing the time needed to infer insights from customer data used to develop marketing campaigns and strategies by 27%.</li>
                        </ul>
                    </div>
                    <div className="datascientist-template-3-job">
                        <h3>Data Scientist Internship</h3>
                        <h4>XYZ Company</h4>
                        <p>June 2016 - September 2016</p>
                        <ul>
                            <li>Implemented strategies focused on email marketing and Search Engine Optimization (SEO).</li>
                            <li>Improved website pages readability through relevant keyword optimization, reducing bounce rate from 50% to 24%.</li>
                            <li>Wrote compelling content to increase brand awareness and increased website traffic.</li>
                        </ul>
                    </div>
                </section>
                <section className="datascientist-template-3-education">
                    <h2>Education</h2>
                    <div className="datascientist-template-3-degree">
                        <h3>Stanford University</h3>
                        <p>B.S in Computer Science • 2012 - 2016</p>
                        <p>Academics Award: Valedictorian</p>
                    </div>
                    <div className="datascientist-template-3-degree">
                        <h3>The University of Chicago</h3>
                        <p>M.S in Statistics • 2017 - 2018</p>
                        <p>Academics Award: AP Scholar</p>
                    </div>
                </section>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default DataScientist3;
