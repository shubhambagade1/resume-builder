import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaLinkedin } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../styles/accountant-4.css';

const Accountant4 = () => {
    const downloadPDF = () => {
        const input = document.getElementById('accountant-4-container');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("download.pdf");
        });
    };

    return (
        <div className="accountant-4-wrapper">
            <div id="accountant-4-container" className="accountant-4-container">
                <div className="accountant-4-header">
                    <div className="accountant-4-contact">
                        <h1>HARRY RICHARD</h1>
                        <h2>ENTRY LEVEL ACCOUNTANT</h2>
                    </div>
                    <div className="accountant-4-contact-details">
                        <div className='accountant-4-contact-details-firstdiv'>
                            <p><FaPhone /> +00 123.345.4567</p>
                            <p><FaEnvelope /> name@e-mail.com</p>
                            <p><FaMapMarkerAlt /> Street, Town/City</p>
                        </div>
                        <div>
                            <p><FaGlobe /> yourwebsite.com</p>
                            <p><FaLinkedin /> linkedin.com/username</p>
                        </div>
                    </div>
                </div>
                <div className="accountant-4-content">
                    <div className="accountant-4-left-content">
                        <div className="accountant-4-section">
                            <h3>PORTFOLIO</h3>
                            <p>bribbble.com/username</p>
                            <p>behance.net/username</p>
                        </div>
                        <div className="accountant-4-section">
                            <h3>SKILLS</h3>
                            <h4>Expertise</h4>
                            <p>Competitive expertise</p>
                            <p>Competitive expertise</p>
                            <p>Competitive expertise</p>
                            <h4>Other</h4>
                            <p>Other expertise</p>
                            <p>Other expertise</p>
                        </div>
                        <div className="accountant-4-section">
                            <h3>AWARDS</h3>
                            <p>2012 Your Award</p>
                            <p>2013 Your Award</p>
                            <p>2014 Your Award</p>
                            <p>2015 Your Award</p>
                            <p>2016 Your Award</p>
                        </div>
                    </div>
                    <div className="accountant-4-right-content">
                        <div className="accountant-4-section">
                            <h3>PROFILE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iam non felis sed elit gravida ama mano bibendum. Etiam ut sem sed sapien amasas a consequat semper a dignissim nisl. Cras sodales diam pharetra justo a laoreet vehicula illam dignissim varius felis.</p>
                        </div>
                        <div className="accountant-4-section">
                            <h3>EDUCATION</h3>
                            <p>Degree Name</p>
                            <p>University/College</p>
                            <p>1999 - 2002</p>
                            <p>Degree Name</p>
                            <p>University/College</p>
                            <p>1999 - 2002</p>
                        </div>
                        <div className="accountant-4-section">
                            <h3>EXPERIENCE</h3>
                            <p>Job Position</p>
                            <p>Company/Location</p>
                            <p>2009 - 2010</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non felis sed elit gravida bibendum. Etiam ut sem sed sapien nunc consequat semper.</p>
                            <p>Job Position</p>
                            <p>Company/Location</p>
                            <p>2009 - 2010</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non felis sed elit gravida bibendum. Etiam ut sem sed sapien nunc consequat semper.</p>
                            <p>Job Position</p>
                            <p>Company/Location</p>
                            <p>2009 - 2010</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non felis sed elit gravida bibendum. Etiam ut sem sed sapien nunc consequat semper.</p>
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

export default Accountant4;
