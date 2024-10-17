import React from 'react';
import {useLocation} from 'react-router-dom';
import{Container} from 'react-bootstrap';

const SubmissionSuccess = ({ name, email, message }) => {
  const location = useLocation();
  return (
    <Container>
  
      <h2></h2>
     <h2 className="text-primary text-center">Message Sent successfully .</h2>
    
    <ul>
      <li style={listItemStyle}><strong>Name:</strong> {formData.name}</li>
  </ul>
  
  </Container>
  );
};

export default SubmissionSuccess;
