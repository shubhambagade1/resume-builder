import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import '../styles/template-10.css';
import html2pdf from 'html2pdf.js';

const Template10 = () => {
    const downloadPDF = () => {
        const element = document.getElementsByClassName('template-10 resume-container')[0];
        const opt = {
            filename: 'Production-resume-2.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };
    return (
        <div className='template-3-main-wrapper'>

            <div className="template-10 resume-container" contentEditable="true">
                <header className="template-10 resume-header">
                    <div className="template-10-header-left">
                        <h1>MIA GARCIA</h1>
                        <h2>Production Manager</h2>
                    </div>
                    <div className="template-10-header-right">
                        <p><FaEnvelope /> m.garcia@email.com</p>
                        <p><FaPhone /> (123) 456-7890</p>
                        <p><FaMapMarkerAlt /> Roswell, GA</p>
                    </div>
                    <p><FaLinkedin /> <a href="/">LinkedIn</a></p>
                </header>
                <div className="template-10 resume-main">
                    <div className="template-10 left-column">
                        <section className="template-10 work-experience">
                            <h2>WORK EXPERIENCE</h2>
                            <div className="template-10 job">
                                <h3>Production Manager</h3>
                                <p className="template-10 company">Kimberly-Clark Corporation</p>
                                <p className="template-10 date-location">2020 - current • Roswell, GA</p>
                                <ul>
                                    <li>Achieved a 12% reduction in excess inventory by implementing the Fishbowl inventory management system</li>
                                    <li>Guided a team that achieved a 17% increase in production output by implementing efficient work schedules using Monday.com</li>
                                    <li>Attained 27% improvement in on-time delivery rate by streamlining logistics and coordinating with suppliers</li>
                                    <li>Reduced production costs by 11% by optimizing resource allocation and negotiating favorable supplier contracts</li>
                                </ul>
                            </div>
                            <div className="template-10 job">
                                <h3>Production Supervisor</h3>
                                <p className="template-10 company">Home Depot</p>
                                <p className="template-10 date-location">2017 - 2020 • Atlanta, GA</p>
                                <ul>
                                    <li>Maintained optimal inventory levels that resulted in a 16% reduction in excess stock and associated holding costs</li>
                                    <li>Minimized equipment downtime by 32% through MaintainX proactive maintenance scheduling</li>
                                    <li>Boosted labor productivity by 22% by introducing cross-training programs and performance-based incentives</li>
                                    <li>Increased production efficiency by 29% through dataPARC process optimization and lean manufacturing techniques</li>
                                </ul>
                            </div>
                            <div className="template-10 job">
                                <h3>Production Specialist</h3>
                                <p className="template-10 company">Southern Company</p>
                                <p className="template-10 date-location">2015 - 2017 • Atlanta, GA</p>
                                <ul>
                                    <li>Ensured a 98% on-time delivery rate by optimizing production schedules and closely monitoring inventory levels</li>
                                    <li>Improved production line uptime to 97% by conducting regular maintenance and implementing predictive maintenance practices with L2L Smart Manufacturing</li>
                                    <li>Led a team to meet quarterly production targets with a 94% success rate, recognizing and addressing bottlenecks in the process</li>
                                    <li>Accelerated product launch time by 28% by using SCORO to coordinate cross-functional teams and implementing agile project management strategies</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="template-10 right-column">
                        <section className="template-10 education">
                            <h2>EDUCATION</h2>
                            <div className="template-10 education-item">
                                <h3>Bachelor of Science</h3>
                                <p className="template-10 degree">Industrial Engineering</p>
                                <p className="template-10 school">Georgia Institute of Technology</p>
                                <p className="template-10 date-location">2011 - 2015 • Atlanta, GA</p>
                            </div>
                        </section>
                        <section className="template-10 skills">
                            <h2>SKILLS</h2>
                            <ul>
                                <li>SAP</li>
                                <li>Wonderware MES</li>
                                <li>SolidWorks</li>
                                <li>JDA Software</li>
                                <li>Preactor</li>
                                <li>Robotics</li>
                                <li>MasterControl</li>
                                <li>Fishbowl Inventory</li>
                                <li>Tableau</li>
                                <li>Trello</li>
                            </ul>
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

export default Template10;
