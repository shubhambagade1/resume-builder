import React from 'react';
import '../styles/template-11.css';
import html2pdf from 'html2pdf.js';

const Template11 = () => {

    const downloadPDF = () => {
        const element = document.getElementsByClassName('template-11-resume-container')[0];
        const opt = {
            filename: 'Management-resume-11.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='template-11-main-wrapper'>
            <div className="template-11-resume-container" contentEditable="true">
                <header className="template-11-header">
                    <div className="template-11-header-left">
                        <h1>S.V. Karthik</h1>
                    </div>
                    <div className="template-11-header-right">
                        <p>Contact: xxxxxxxxxx</p>
                        <p>E-Mail: xxx@gmail.com</p>
                    </div>
                </header>
                <section className="template-11-section">
                    <p>Seeking managerial level assignments in Production Planning & Control with a leading organization of repute in the Automobile industry, preferably in Chennai</p>

                    <h2>Profile Summary</h2>
                    <ul>
                        <li>A competent professional with nearly 5 years of experience in:</li>
                        <li>Experience in managing production operations with key focus on the optimal utilization of the resources</li>
                        <li>Result oriented record of streamlining the working SOPs for enhanced operational effectiveness</li>
                        <li>Knowledge of the implementation of various techniques and quality/safety standards for improving operations along with cost savings</li>
                        <li>An effective communicator with excellent relationship building & interpersonal skills; strong analytical, problem solving & organizational abilities; possesses a flexible & detail oriented attitude</li>
                    </ul>
                </section>
                <section className="template-11-section">
                    <h2>Organizational Experience</h2>
                    <h3>Since Aug'12 with Faurecia Emission Controls Technologies India Pvt. Ltd., Sriperamabdure as Production Engineer (Gap Leader)</h3>
                    <h4>Key Result Areas:</h4>
                    <ul>
                        <li>Implementing quality standards & structured processes/internal control plans for manufacturing operations of equipment and machines as well as standard products ensuring accomplishment of business goals across the assigned business units</li>
                        <li>Single-handedly managing a team of 40 members in a shift;</li>
                        <li>Developing service standards & operating procedures with latest knowledge & modern skills for achieving business excellence in coordination with Stakeholders, Suppliers and Customers</li>
                        <li>Monitoring quality systems & compliance with preset standards; troubleshooting and maintaining requisite documents to ensure complete in-process quality & improvement in process capabilities</li>
                        <li>Spearheading entire gamut of production & planning based operations inclusive of:</li>
                    </ul>
                    <h4>Career Commencement</h4>
                    <ul>
                        <li>May'09-Jul'12 with Midtown Manufacturing India Pvt. Ltd., Maraimalainagar</li>
                    </ul>
                </section>
                <section className="template-11-section">
                    <h2>Academic Details</h2>
                    <ul>
                        <li>Diploma in Mechanical Engineering from SRM Polytechnic, Kattankulathur, Tamil Nadu in 2009</li>
                        <li>12th from Govt. Boys Hr. Sec. School, Guduvancherry, Tamil Nadu in 2006</li>
                    </ul>
                </section>
                <section className="template-11-section">
                    <h2>Personal Details</h2>
                    <p>Date of Birth: 9th August 1987</p>
                    <p>Address: No. 12, Vinayagapuram, 7 Karanaipuducheri, Urapakkam, Kanchipuram - 603210</p>
                    <p>Languages Known: Tamil and English</p>
                </section>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Template11;
