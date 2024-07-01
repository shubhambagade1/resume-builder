import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/data-scientist-2.css';
import dummyimg from '../../images/dummyimg.jpg';
import html2pdf from 'html2pdf.js';

const DataScientist2 = () => {

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
        const element = document.getElementsByClassName('datascientist-template-2-container')[0];
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
            <div className="datascientist-template-2-container" contentEditable="true">
                <div className="datascientist-template-2-left">
                    <header className="datascientist-template-2-header">
                        <h1>Jamila Amari</h1>
                        <h2>Data Scientist</h2>
                    </header>
                    <section className="datascientist-template-2-summary">
                        <p>
                            A Data Scientist with three years of professional experience, specializing in Python, machine learning, Big Data, and data management.
                            Adept at performing statistical analysis on large, complex data sets to drive business intelligence and enhance data visualization.
                        </p>
                    </section>
                    <section className="datascientist-template-2-experience">
                        <h2>Professional Experience</h2>
                        <div className="datascientist-template-2-job">
                            <h3>Omega Real Estate, Raleigh, NC</h3>
                            <h4>Junior Data Scientist</h4>
                            <p>July 2017 - Present</p>
                            <ul>
                                <li>Collaborate with team members to improve customer relationship management database, leading to improved customer service outcomes in a high-volume real estate firm</li>
                                <li>Used predictive analytics including data mining techniques to forecast company sales with 94% accuracy</li>
                                <li>Increase data security by updating encryption, IP security and wireless transmission processes</li>
                            </ul>
                        </div>
                        <div className="datascientist-template-2-job">
                            <h3>Delta Security, Raleigh, NC</h3>
                            <h4>Data Scientist Intern</h4>
                            <p>June 2016 - September 2016</p>
                            <ul>
                                <li>Gathered and analyzed information relating to system security and cyber threat intelligence</li>
                                <li>Utilized analytics involving large datasets to improve models for cyber threat indicators</li>
                                <li>Helped develop new algorithms to improve system accuracy and security</li>
                            </ul>
                        </div>
                    </section>
                    <section className="datascientist-template-2-education">
                        <h2>Education</h2>
                        <div className="datascientist-template-2-degree">
                            <h3>Master of Science in Analytics</h3>
                            <p>North Carolina State University – Raleigh, Raleigh, NC</p>
                            <p>September 2015 - June 2017</p>
                        </div>
                        <div className="datascientist-template-2-degree">
                            <h3>Bachelor of Science in Mathematics</h3>
                            <p>University of Wisconsin – Madison, Madison, WI</p>
                            <p>September 2011 - June 2015</p>
                        </div>
                    </section>
                </div>
                <div className="datascientist-template-2-right">
                    <img className='datascientist-2-img'
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
                    <div className="datascientist-template-2-contact">
                        <p><FaMapMarkerAlt /> 4759 Sunnydale Lane, Plano, Texas, USA, 12345</p>
                        <p><FaPhone /> (123) 456-7890</p>
                        <p><FaEnvelope /> email@youremail.com</p>
                    </div>
                    <section className="datascientist-template-2-skills">
                        <h2>Key Skills</h2>
                        <ul>
                            <li>Statistical Analysis</li>
                            <li>Machine Learning</li>
                            <li>Languages: C++, R, Python</li>
                            <li>Data Management</li>
                            <li>Big Data</li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default DataScientist2;
