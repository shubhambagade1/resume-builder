import React from 'react';
import '../styles/template-8.css';
import html2pdf from 'html2pdf.js';


const Template8 = () => {

    const downloadPDF = () => {
        const element = document.getElementsByClassName('template-8-resume-container')[0];
        const opt = {
            filename: 'Management-resume-2.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };
    return (
        <div className='template-3-main-wrapper'>
            <div className="template-8-resume-container" contentEditable="true">
                <header className="template-8-header">
                    <h1 contentEditable>Nina Crawft</h1>
                    <p contentEditable>Spring Hill, FL 34611 ◆ (555) 555-5555 ◆ example@example.com</p>
                </header>
                <section className="template-8-section">
                    <h2>Professional Summary</h2>
                    <p contentEditable>
                        Accomplished operations manager offering over 11 years of experience and proven success in manufacturing production,
                        quality assurance and leadership. Highly skilled in streamlining operations and improving throughput continuous process
                        improvement and cross-functional collaboration. Accomplished in building high-performing teams inspiring staff to achieve
                        personal and professional goals.
                    </p>
                </section>
                <section className="template-8-section">
                    <h2>Work History</h2>
                    <div className="template-8-job">
                        <h3 contentEditable>Operations Manager</h3>
                        <p contentEditable>11/2017 - Current</p>
                        <p contentEditable>Hat Tip Inc – Miami Gardens, FL</p>
                        <ul contentEditable>
                            <li>Oversee managers, operations, sales, finance, human resources departments and operations in a matrix environment.</li>
                            <li>Manage daily operations, including sales, purchasing, scheduling and P&L.</li>
                            <li>Establish and meet goals and management operations to maximize productivity and outcomes.</li>
                        </ul>
                    </div>
                    <div className="template-8-job">
                        <h3 contentEditable>Operations Specialist</h3>
                        <p contentEditable>05/2014 - 05/2016</p>
                        <p contentEditable>Thornton & Coy Pile – Granville, FL</p>
                        <ul contentEditable>
                            <li>Assisted over five departments with various production changes by communicating new improvement plans and expectations.</li>
                            <li>Maintained daily reports and advised executive leaders in decision-making processes.</li>
                            <li>Tracked and analyzed reports to determine needed improvements.</li>
                        </ul>
                    </div>
                    <div className="template-8-job">
                        <h3 contentEditable>Regional Coordinator</h3>
                        <p contentEditable>12/2011 - 11/2013</p>
                        <p contentEditable>Tangible Play Inc – Jacksonville, FL</p>
                        <ul contentEditable>
                            <li>Coordinated proper training and compliance by working with supervisors and operators.</li>
                            <li>Drove client retention and relationships by expanding and improving operational techniques.</li>
                            <li>Implemented policies and standard operating procedures for continuous improvement.</li>
                        </ul>
                    </div>
                </section>
                <section className="template-8-section">
                    <h2>Skills</h2>
                    <div className="template-8-skills">
                        <ul contentEditable>
                            <li>Budgeting and forecasting</li>
                            <li>Project development and life cycle</li>
                            <li>Risk analysis and management</li>
                            <li>Management information systems</li>
                        </ul>
                        <ul contentEditable>
                            <li>Supply Chain Management</li>
                            <li>Solutions development</li>
                            <li>Policies and procedures implementation</li>
                            <li>Mergers and acquisitions knowledge</li>
                        </ul>
                    </div>
                </section>
                <section className="template-8-section">
                    <h2>Education</h2>
                    <p contentEditable>Bachelor of Arts: Business Management</p>
                    <p contentEditable>Florida State University - Tallahassee, FL</p>
                </section>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Template8;
