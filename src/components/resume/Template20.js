import React, { useEffect, useRef, useState } from 'react';
import '../styles/template-20.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResumeTemplate = () => {
    const profileCanvasRef = useRef(null);
    const skillsCanvasRef = useRef(null);
    const experienceCanvasRef = useRef(null);
    const educationCanvasRef = useRef(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const drawSection = (canvas, height) => {
            const ctx = canvas.getContext('2d');
            canvas.width = 800;
            canvas.height = height;
            ctx.fillStyle = '#f4f4f9';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const profileCanvas = profileCanvasRef.current;
        const skillsCanvas = skillsCanvasRef.current;
        const experienceCanvas = experienceCanvasRef.current;
        const educationCanvas = educationCanvasRef.current;

        drawSection(profileCanvas, 200);
        drawSection(skillsCanvas, 150);
        drawSection(experienceCanvas, 300);
        drawSection(educationCanvas, 150);

        const profileCtx = profileCanvas.getContext('2d');
        const img = new Image();
        img.src = 'https://via.placeholder.com/150'; // Replace with your photo URL
        img.onload = () => {
            profileCtx.drawImage(img, 25, 25, 150, 150);
            profileCtx.font = '40px Arial';
            profileCtx.fillStyle = '#34495e';
            profileCtx.fillText('Mariana Anderson', 200, 70);
            profileCtx.font = '24px Arial';
            profileCtx.fillText('Marketing Manager', 200, 110);
            profileCtx.font = '16px Arial';
            profileCtx.fillText(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
                'Nullam pharetra in lorem at laoreet. Donec hendrerit libero\n' +
                'eget est tempor, quis tempus arcu elementum.\n' +
                'In elementum elit et dui tristique feugiat.\n' +
                'Mauris convallis, mi at mattis malesuada, neque nulla volutpat\n' +
                'dolor, hendrerit faucibus eros nibh ut nunc.',
                200, 150
            );
            setImageLoaded(true);
        };
        img.onerror = () => {
            console.error('Failed to load the image.');
            setImageLoaded(true);
        };

        const skillsCtx = skillsCanvas.getContext('2d');
        skillsCtx.font = '20px Arial';
        skillsCtx.fillStyle = '#34495e';
        skillsCtx.fillText('Skills', 20, 30);
        skillsCtx.font = '16px Arial';
        skillsCtx.fillText('UI/UX', 20, 60);
        skillsCtx.fillText('Visual Design', 20, 90);
        skillsCtx.fillText('Wireframes', 20, 120);
        skillsCtx.fillText('Storyboards', 20, 150);
        skillsCtx.fillText('User Flows', 20, 180);
        skillsCtx.fillText('Process Flows', 20, 210);

        const experienceCtx = experienceCanvas.getContext('2d');
        experienceCtx.font = '20px Arial';
        experienceCtx.fillStyle = '#34495e';
        experienceCtx.fillText('Experience', 20, 30);
        experienceCtx.font = '16px Arial';
        experienceCtx.fillText('2019 - 2022', 20, 60);
        experienceCtx.fillText('Company Name | 123 Anywhere St., Any City', 20, 90);
        experienceCtx.fillText('Job position here', 20, 120);
        experienceCtx.fillText(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
            'Nullam pharetra in lorem at laoreet. Donec hendrerit libero\n' +
            'eget est tempor, quis tempus arcu elementum.\n' +
            'In elementum elit et dui tristique feugiat.\n' +
            'Mauris convallis, mi at mattis malesuada, neque nulla volutpat\n' +
            'dolor, hendrerit faucibus eros nibh ut nunc.',
            20, 150
        );
        experienceCtx.fillText('2017 - 2019', 20, 210);
        experienceCtx.fillText('Company Name | 123 Anywhere St., Any City', 20, 240);
        experienceCtx.fillText('Job position here', 20, 270);
        experienceCtx.fillText(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
            'Nullam pharetra in lorem at laoreet. Donec hendrerit libero\n' +
            'eget est tempor, quis tempus arcu elementum.\n' +
            'In elementum elit et dui tristique feugiat.\n' +
            'Mauris convallis, mi at mattis malesuada, neque nulla volutpat\n' +
            'dolor, hendrerit faucibus eros nibh ut nunc.',
            20, 300
        );
        experienceCtx.fillText('2015 - 2017', 20, 360);
        experienceCtx.fillText('Company Name | 123 Anywhere St., Any City', 20, 390);
        experienceCtx.fillText('Job position here', 20, 420);
        experienceCtx.fillText(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
            'Nullam pharetra in lorem at laoreet. Donec hendrerit libero\n' +
            'eget est tempor, quis tempus arcu elementum.\n' +
            'In elementum elit et dui tristique feugiat.\n' +
            'Mauris convallis, mi at mattis malesuada, neque nulla volutpat\n' +
            'dolor, hendrerit faucibus eros nibh ut nunc.',
            20, 450
        );

        const educationCtx = educationCanvas.getContext('2d');
        educationCtx.font = '20px Arial';
        educationCtx.fillStyle = '#34495e';
        educationCtx.fillText('Education', 20, 30);
        educationCtx.font = '16px Arial';
        educationCtx.fillText('2008', 20, 60);
        educationCtx.fillText('Enter Your Degree', 20, 90);
        educationCtx.fillText('University/College', 20, 120);
        educationCtx.fillText('2008', 20, 150);
        educationCtx.fillText('Enter Your Degree', 20, 180);
        educationCtx.fillText('University/College', 20, 210);

    }, []);

    const handleDownload = () => {
        if (!imageLoaded) {
            alert("Image is still loading. Please wait.");
            return;
        }

        const input = document.querySelector('.template-20-container');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', 'a4');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('resume.pdf');
        });
    };

    return (
        <div className='template-20-main-wrapper'>
            <div className='template-20-container'>
                <canvas ref={profileCanvasRef} className='profile-canvas'></canvas>
                <canvas ref={skillsCanvasRef} className='skills-canvas'></canvas>
                <canvas ref={experienceCanvasRef} className='experience-canvas'></canvas>
                <canvas ref={educationCanvasRef} className='education-canvas'></canvas>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={handleDownload}>Download PDF</button>
            </div>
        </div>
    );
};

export default ResumeTemplate;
