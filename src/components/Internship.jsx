import React from 'react';
import cognifyzLogo from '../assets/cognifyz logo.png';

const Internship = () => {
    const pageStyle = {
        backgroundColor: '#000', // Black background for the entire page
        minHeight: '100vh', // Ensure it covers the full height of the viewport
        padding: '20px', // Padding around the container
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column', // Stack content vertically
        justifyContent: 'space-between', // Space between content and footer
    };

    const boxStyle = {
        backgroundColor: '#181c24', // Box color
        border: '1px solid #f5f5f5', // Border color
        borderRadius: '0.5rem', // Rounded corners
        padding: '30px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Shadow for the box
        width: '80%', // Width of the box
        color: '#fff', // White text for contrast
        display: 'flex',
        justifyContent: 'space-between', // Space between the content and the logo
        alignItems: 'center', // Center the content vertically
        margin: 'auto', // Center the box horizontally
    };

    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: '1',
    };

    const headingStyle = {
        fontSize: '1.5em',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    const paragraphStyle = {
        fontSize: '1.1em',
        marginBottom: '15px',
    };

    const linkStyle = {
        color: '#38a169', // Green color for the link
        textDecoration: 'none',
        fontWeight: 'bold',
        marginTop: '10px',
    };

    const buttonStyle = {
        backgroundColor: '#38a169', // Green button background
        color: '#fff', // White text
        padding: '10px 20px',
        border: 'none',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        fontSize: '1em',
        marginTop: '20px',
        transition: 'transform 0.2s',
    };

    const logoStyle = {
        marginLeft: '40px',
        height: '150px', // Adjust the height of the logo as needed
    };

    const handleOfferLetterClick = () => {
        window.open('https://drive.google.com/file/d/1DE7hQSLLclNvd0KZdg_2uIrf878dXCAC/view?usp=sharing', '_blank');
    };

    return (
        <div style={pageStyle}>
            <div style={boxStyle}>
                <div style={contentStyle}>
                    <h1 style={headingStyle}>Internship Details</h1>
                    <p style={paragraphStyle}><strong>Company Name:</strong> Cognifyz</p>
                    <p style={paragraphStyle}><strong>Position:</strong> FULL STACK DEVELOPER INTERN</p>
                    <p style={paragraphStyle}><strong>Internship Tenure:</strong> Oct 2024 - Nov 2024</p>
                    <a href="https://cognifyz.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        Visit Company Website
                    </a>
                    <button style={buttonStyle} onClick={handleOfferLetterClick}>
                        Offer Letter
                    </button>
                </div>
                <img
                    src={cognifyzLogo} 
                    alt="Company Logo"
                    style={logoStyle}
                />
            </div>
        </div>
    );
};

export default Internship;
