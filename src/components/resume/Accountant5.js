import React from 'react';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../styles/accountant-5.css';
import DummyImg from "../../images/dummyimg.jpg"

const Accountant5 = () => {
    const downloadPDF = () => {
        const input = document.getElementById('accountant-5-container');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("JamieChastain_Resume.pdf");
        });
    };

    return (
        <div className="accountant-5-wrapper">
            <div id="accountant-5-container" className="accountant-5-container" contentEditable="true">
                <div className="accountant-5-header">
                    <img src={DummyImg} alt="Profile" className="accountant-5-profile-img" />
                    <div className="accountant-5-title">
                        <h1>Jamie Chastain</h1>
                        <h2>ACCOUNTANT</h2>
                    </div>
                </div>
                <div className="accountant-5-profile">
                    <h3>PROFILE:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a lectus at augue tristique scelerisque. Nam quis consectetur quam. Maecenas pellentesque orci non odio cursus euismod.</p>
                </div>
                <div className="accountant-5-contact-ref">
                    <div className="accountant-5-contacts">
                        <h3>CONTACTS</h3>
                        <p><FaPhone /> +123-456-7890</p>
                        <p><FaEnvelope /> hello@reallygreatsite.com</p>
                        <p><FaGlobe /> www.reallygreatsite.com</p>
                    </div>
                    <div className="accountant-5-references">
                        <h3>REFERENCES</h3>
                        <p>Kyrie Petrakis</p>
                        <p>Studio Shodwe</p>
                        <p>+123-456-7890</p>
                    </div>
                </div>
                <div className="accountant-5-experience-education">
                    <div className="accountant-5-work-experience">
                        <h3>WORK EXPERIENCE</h3>
                        <div className="accountant-5-experience-item">
                            <span className="accountant-5-dot"></span>
                            <div className="accountant-5-experience-content">
                                <h4>2016 - 2017</h4>
                                <p>Staff Accountant Internship</p>
                                <p>Any Company</p>
                            </div>
                        </div>
                        <div className="accountant-5-experience-item">
                            <span className="accountant-5-dot"></span>
                            <div className="accountant-5-experience-content">
                                <h4>2017 - 2018</h4>
                                <p>Assistant Accounting</p>
                                <p>Any Company</p>
                            </div>
                        </div>
                        <div className="accountant-5-experience-item">
                            <span className="accountant-5-dot"></span>
                            <div className="accountant-5-experience-content">
                                <h4>2018 - present</h4>
                                <p>Accountant</p>
                                <p>Any Company</p>
                            </div>
                        </div>
                    </div>
                    <div className="accountant-5-education">
                        <h3>EDUCATION</h3>
                        <div>
                            <h4>Bachelor of Accounting</h4>
                            <p>Any University, Any City</p>
                            <p>2012 - 2017</p>
                        </div>
                        <div>
                            <h4>Master of Accounting</h4>
                            <p>Any University, Any City</p>
                            <p>2017 - 2020</p>
                        </div>
                    </div>
                </div>
                <div className="accountant-5-skills-language">
                    <div className="accountant-5-skills">
                        <h3>SKILLS</h3>
                        <ul>
                            <li>Financial accounting</li>
                            <li>Payroll accounting and tax computation</li>
                            <li>Mastering accounting software</li>
                            <li>Auditing</li>
                        </ul>
                    </div>
                    <div className="accountant-5-language">
                        <h3>LANGUAGE</h3>
                        <p>French - Native</p>
                        <p>English - Advanced</p>
                    </div>
                </div>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Accountant5;
