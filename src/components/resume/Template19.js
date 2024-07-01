import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CanvasWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: auto;
  background-color: #f4f4f9;
  padding: 20px;
`;

const Canvas = styled.canvas`
  border: 1px solid #ddd;
  width: 800px;
  height: 1200px;
  animation: fadeIn 2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const EditableDiv = styled.div`
  position: absolute;
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || '16px'};
  font-family: Arial, sans-serif;
  white-space: pre-wrap;
  padding: 2px;
`;

const ResumeTemplate = () => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 1200;

    ctx.fillStyle = '#f4f4f9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#2c3e50';
    ctx.fillRect(0, 0, 300, canvas.height);

    const img = new Image();
    img.src = 'https://via.placeholder.com/150';
    img.onload = () => {
      ctx.drawImage(img, 75, 50, 150, 150);
      setImageLoaded(true);
    };
  }, []);

  const handleDownload = () => {
    if (!imageLoaded) {
      alert("Image is still loading. Please wait.");
      return;
    }
    
    const input = wrapperRef.current;
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
    <CanvasWrapper ref={wrapperRef}>
      <Canvas ref={canvasRef}></Canvas>
      <EditableDiv
        contentEditable
        style={{ top: '300px', left: '370px', width: '200px' }}
        color="white"
      >
        Contact
        <br />
        Phone
        <br />
        123-456-7890
        <br />
        Email
        <br />
        hello@reallygreatsite.com
        <br />
        Address
        <br />
        123 Anywhere St, Any City
      </EditableDiv>
      <EditableDiv
        contentEditable
        style={{ top: '510px', left: '370px', width: '200px' }}
        color="white"
      >
        Education
        <br />
        2008
        <br />
        Enter Your Degree
        <br />
        University/College
        <br />
        2008
        <br />
        Enter Your Degree
        <br />
        University/College
      </EditableDiv>
      <EditableDiv
        contentEditable
        style={{ top: '760px', left: '370px', width: '200px' }}
        color="white"
      >
        Expertise
        <br />
        UI/UX
        <br />
        Visual Design
        <br />
        Wireframes
        <br />
        Storyboards
        <br />
        User Flows
        <br />
        Process Flows
      </EditableDiv>
      <EditableDiv
        contentEditable
        style={{ top: '1000px', left: '370px', width: '200px' }}
        color="white"
      >
        Language
        <br />
        English
        <br />
        Spanish
      </EditableDiv>
      <EditableDiv
        contentEditable
        style={{ top: '100px', left: '690px', width: '400px' }}
      >
        <span style={{ fontSize: '40px', color: '#34495e' }}>
          Mariana Anderson
        </span>
        <br />
        <span style={{ fontSize: '24px', color: '#34495e' }}>
          Marketing Manager
        </span>
        <br />
        <span style={{ fontSize: '16px', color: '#34495e' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Nullam pharetra in lorem at laoreet. Donec hendrerit libero
          <br />
          eget est tempor, quis tempus arcu elementum.
          <br />
          In elementum elit et dui tristique feugiat.
          <br />
          Mauris convallis, mi at mattis malesuada, neque nulla volutpat
          <br />
          dolor, hendrerit faucibus eros nibh ut nunc.
        </span>
      </EditableDiv>
      <EditableDiv
        contentEditable
        style={{ top: '400px', left: '690px', width: '400px' }}
      >
        <span style={{ fontSize: '20px', color: '#34495e' }}>Experience</span>
        <br />
        <span style={{ fontSize: '16px', color: '#34495e' }}>
          2019 - 2022
          <br />
          Company Name | 123 Anywhere St., Any City
          <br />
          Job position here
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Nullam pharetra in lorem at laoreet. Donec hendrerit libero
          <br />
          eget est tempor, quis tempus arcu elementum.
          <br />
          In elementum elit et dui tristique feugiat.
          <br />
          Mauris convallis, mi at mattis malesuada, neque nulla volutpat
          <br />
          dolor, hendrerit faucibus eros nibh ut nunc.
        </span>
        <br />
        <span style={{ fontSize: '16px', color: '#34495e' }}>
          2017 - 2019
          <br />
          Company Name | 123 Anywhere St., Any City
          <br />
          Job position here
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Nullam pharetra in lorem at laoreet. Donec hendrerit libero
          <br />
          eget est tempor, quis tempus arcu elementum.
          <br />
          In elementum elit et dui tristique feugiat.
          <br />
          Mauris convallis, mi at mattis malesuada, neque nulla volutpat
          <br />
          dolor, hendrerit faucibus eros nibh ut nunc.
        </span>
        <br />
        <span style={{ fontSize: '16px', color: '#34495e' }}>
          2015 - 2017
          <br />
          Company Name | 123 Anywhere St., Any City
          <br />
          Job position here
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Nullam pharetra in lorem at laoreet. Donec hendrerit libero
          <br />
          eget est tempor, quis tempus arcu elementum.
          <br />
          In elementum elit et dui tristique feugiat.
          <br />
          Mauris convallis, mi at mattis malesuada, neque nulla volutpat
          <br />
          dolor, hendrerit faucibus eros nibh ut nunc.
        </span>
      </EditableDiv>
      <EditableDiv
        contentEditable
        style={{ top: '1230px', left: '690px', width: '400px' }}
      >
        <span style={{ fontSize: '20px', color: '#34495e' }}>Reference</span>
        <br />
        <span style={{ fontSize: '16px', color: '#34495e' }}>
          Name Surname
          <br />
          Job position, Company Name
          <br />
          Phone: 123-456-7890
          <br />
          Email: hello@reallygreatsite.com
          <br />
          Name Surname
          <br />
          Job position, Company Name
          <br />
          Phone: 123-456-7890
          <br />
          Email: hello@reallygreatsite.com
        </span>
      </EditableDiv>
      <div className='download-section'>
        <button className='downloadpdf-btn' onClick={handleDownload}>Download PDF</button>
      </div>
    </CanvasWrapper>
  );
};

export default ResumeTemplate;
