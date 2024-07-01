import React from 'react';
import html2pdf from 'html2pdf.js';
import '../styles/data-scientist-1.css';

const DataScientist1 = () => {

    const downloadPDF = () => {
        const element = document.getElementsByClassName('datascientist-1-container')[0];
        const opt = {
            filename: 'data-scientist-profile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='template-3-main-wrapper'>
            <div className="datascientist-1-container" contentEditable="true">
                <header className="datascientist-1-header">
                    <h1 className="datascientist-1-name">PETER CONNOLLY</h1>
                    <h2 className="datascientist-1-title">Senior Data Scientist</h2>
                    <p className="datascientist-1-contact">📧 johnsmith@gmail.com 📍 Liverpool</p>
                </header>
                <div className="datascientist-1-content">
                    <div className="datascientist-1-left">
                        <section className="datascientist-1-summary">
                            <h3 className='datascientist-1-section-heading'>SUMMARY</h3>
                            <p>
                                I am a skilled Data Scientist with a PhD in Data Science and extensive experience in the application of Machine Learning in commercial settings. I have a strong business acumen, which allows me to communicate effectively with stakeholders, and I am highly proficient in Python.
                            </p>
                        </section>
                        <section className="datascientist-1-experience">
                            <p className='datascientist-1-section-heading'>EXPERIENCE</p>
                            <div className="datascientist-1-job">
                                <p className='datascientist-1-experience-heading'>Senior Data Scientist</p>
                                <p>ABC Financial Services</p>
                                <p>📅 Present 📍 Birmingham</p>
                                <ul>
                                    <li>Developed and deployed recommender systems, resulting in 20% increase in customer satisfaction</li>
                                    <li>Optimized customer churn prediction models, resulting in 15% reduction in customer attrition</li>
                                    <li>Implemented forecasting models for financial metrics, resulting in more accurate forecasts and better financial decision-making</li>
                                    <li>Collaborated with stakeholders to identify business opportunities and translate them into data-driven projects</li>
                                </ul>
                            </div>
                            <div className="datascientist-1-job">
                                <p className='datascientist-1-job-heading'>Data Scientist</p>
                                <p>XYZ Consulting</p>
                                <p>📅 04/2016 - 08/2018 📍 London</p>
                                <ul>
                                    <li>Designed and implemented predictive models for a pharmaceutical client resulting in 10% increase in efficiency</li>
                                    <li>Developed a forecasting model for a retail client resulting in £500k cost savings</li>
                                    <li>Conducted exploratory data analysis for a supply chain management client, resulting in identification of inefficiencies in their processes</li>
                                </ul>
                            </div>
                        </section>
                        <section className="datascientist-1-education">
                            <h3 className='datascientist-1-section-heading'>EDUCATION</h3>
                            <div className="datascientist-1-edu-item">
                                <h4 className='datascientist-1-education-heading'>PhD in Data Science</h4>
                                <p>Imperial College London 📅 08/2013 - 07/2016 📍 London, UK</p>
                            </div>
                            <div className="datascientist-1-edu-item">
                                <p className='datascientist-1-education-heading'>BSc in Mathematics</p>
                                <p>University of Manchester 📅 08/2010 - 07/2013 📍 Manchester, UK</p>
                            </div>
                        </section>
                    </div>
                    <div className="datascientist-1-right">
                        <section className="datascientist-1-languages">
                            <h3 className='datascientist-1-section-heading'>LANGUAGES</h3>
                            <p>English: Native</p>
                            <p>French: Advanced</p>
                        </section>
                        <section className="datascientist-1-strengths">
                            <h3 className='datascientist-1-section-heading'>STRENGTHS</h3>
                            <ul>
                                <li><strong>Strong Analytical Skills</strong> - I have successfully tackled complex data analysis projects resulting in increased cost savings and revenue growth for my employers.</li>
                                <li><strong>Adaptability</strong> - I am able to quickly adapt to changing business needs and can effectively work with new technologies and tools.</li>
                                <li><strong>Attention to Detail</strong> - I am committed to accuracy in data analysis and always strive for the highest level of quality in my work.</li>
                            </ul>
                        </section>
                        <section className="datascientist-1-skills">
                            <h3 className='datascientist-1-section-heading'>SKILLS</h3>
                            <p>Python, R, SQL, Tableau, Git</p>
                        </section>
                        <section className="datascientist-1-achievements">
                            <p className='datascientist-1-section-heading'>ACHIEVEMENTS</p>
                            <ul>
                                <li><strong>Development of cutting-edge predictive models</strong> - I am proud of my contribution to the development of predictive models which helped clients achieve significant cost savings and increased efficiency.</li>
                                <li><strong>Contribution to research in the field of Data Science</strong> - I am proud of my research on the application of Machine Learning algorithms to solve business problems, which has been published in several academic journals.</li>
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

export default DataScientist1;
