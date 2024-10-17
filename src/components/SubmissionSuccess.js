import React from 'react';

const SubmissionSuccess = ({ name, email, message }) => {
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
