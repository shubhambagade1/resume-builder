import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import '../styles/template-16.css';
import html2pdf from 'html2pdf.js';

const Template16 = () => {

    const downloadPDF = () => {
        const element = document.getElementsByClassName('template-16-resume-container')[0];
        const opt = {
            filename: 'Senior Financial Analyst-resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };
    return (
        <div className="template-16-main-wrapper">
            <div className="template-16-resume-container" contentEditable="true">
                <div className="template-16-header">
                    <h1>Owen Wright</h1>
                    <h2>Senior Financial Analyst | Data Analysis | Client Relations</h2>
                    <div className="template-16-contact">
                        <p><FaPhone /> +1-(234)-555-1234</p>
                        <p><FaEnvelope /> help@enhancv.com</p>
                        <p><FaLinkedin /> linkedin.com</p>
                    </div>
                    <p><FaMapMarkerAlt /> Charlotte, North Carolina</p>
                </div>
                <div className="template-16-content">
                    <div className="template-16-left">
                        <div className="template-16-summary">
                            <h3>SUMMARY</h3>
                            <p>With over a decade of financial analysis and client relationship experience, I am passionate about tackling complex financial challenges and delivering exceptional results. My background includes significant achievements in data-driven decision-making and innovation in financial processes—with a proven track record in strategic planning and client satisfaction.</p>
                        </div>
                        <div className="template-16-experience">
                            <h3>EXPERIENCE</h3>
                            <div className="template-16-job">
                                <h4>Lead Financial Analyst</h4>
                                <p>Bank of America | 06/2018 - Present | Charlotte, North Carolina</p>
                                <ul>
                                    <li>Streamlined financial reporting processes, leading to a 15% reduction in month-end close time for complex client accounts.</li>
                                    <li>Collaborated with cross-functional teams to integrate new billing methods, enhancing accuracy and efficiency.</li>
                                    <li>Developed customer-specific financial models that improved projection accuracy by 25%.</li>
                                    <li>Identified key financial trends through in-depth data analysis, influencing the strategic planning process.</li>
                                    <li>Conducted thorough year-end financial accounting for high-profile clients, ensuring 100% compliance with regulations.</li>
                                    <li>Led internal and external audits, resulting in adoption of best practices and zero discrepancies over two consecutive years.</li>
                                </ul>
                            </div>
                            <div className="template-16-job">
                                <h4>Financial Consultant</h4>
                                <p>Wells Fargo | 03/2014 - 05/2018 | Charlotte, North Carolina</p>
                                <ul>
                                    <li>Managed a portfolio of 200+ midsize business clients, delivering tailored financial solutions and advice.</li>
                                    <li>Drove a 20% increase in client retention through customized reporting and personalized financial analysis.</li>
                                    <li>Implemented new financial software that improved reporting efficiency by 30%.</li>
                                    <li>Coordinated with sales and underwriting teams to develop compelling product strategies for clients.</li>
                                    <li>Facilitated client strategy workshops aimed at improving financial performance and product adoption.</li>
                                </ul>
                            </div>
                            <div className="template-16-job">
                                <h4>Financial Analyst</h4>
                                <p>Ally Financial | 09/2010 - 02/2014 | Charlotte, North Carolina</p>
                                <ul>
                                    <li>Supported financial decision-making by analyzing market trends and operational data.</li>
                                    <li>Played a key role in developing financial planning tools that increased departmental efficiency by 20%.</li>
                                    <li>Generated monthly revenue projections, enhancing the accuracy of budget forecasts.</li>
                                    <li>Contributed to the implementation of a new billing system that reduced errors by 15%.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="template-16-education">
                            <h3>EDUCATION</h3>
                            <p>Master of Science in Finance</p>
                            <p>Duke University | 01/2007 - 01/2009 | Durham, North Carolina</p>
                            <p>Bachelor of Science in Accounting</p>
                            <p>University of North Carolina at Charlotte | 01/2003 - 01/2007 | Charlotte, North Carolina</p>
                        </div>
                    </div>
                    <div className="template-16-right">
                        <div className="template-16-achievements">
                            <h3>ACHIEVEMENTS</h3>
                            <ul>
                                <li>Top Performer Award - Recognized as top performer for exemplary financial reporting and client satisfaction ratings at Bank of America in 2020.</li>
                                <li>Innovation in Reporting - Initiated and led a project that revolutionized financial reporting processes, increasing data transparency for clients.</li>
                                <li>Client Retention Success - Instrumental in achieving a 95% client retention rate by providing strategic financial advice and support to midsize businesses.</li>
                                <li>Financial Software Implementation - Successfully spearheaded the adoption of a new financial software across the department, enhancing overall efficiency.</li>
                            </ul>
                        </div>
                        <div className="template-16-skills">
                            <h3>SKILLS</h3>
                            <ul>
                                <li>Financial Reporting</li>
                                <li>Data Analysis</li>
                                <li>Strategic Planning</li>
                                <li>Project Management</li>
                                <li>Microsoft Office</li>
                                <li>Financial Modeling</li>
                            </ul>
                        </div>
                        <div className="template-16-courses">
                            <h3>COURSES</h3>
                            <p>Certified Financial Planner</p>
                            <p>Completed the CFP certification program, focusing on financial planning, risk management, and retirement planning through CFP Board.</p>
                            <p>Advanced Data Analytics for Finance</p>
                            <p>Attained hands-on experience with data analytics tools and techniques focused on financial applications, offered by Coursera.</p>
                        </div>
                        <div className="template-16-passions">
                            <h3>PASSIONS</h3>
                            <p>Strategic Financial Analysis - Deeply interested in the intersection of data analytics and financial strategy, continually seeking innovative solutions for complex client needs.</p>
                            <p>Continual Learning and Development - Committed to professional growth through ongoing education in finance, data analysis, and emerging industry trends.</p>
                            <p>Volunteering in Financial Literacy - Passionate about empowering individuals by volunteering to educate on personal finance and budgeting principles.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Template16;
