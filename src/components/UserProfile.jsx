import React, { useEffect, useState } from 'react';
import "./UserProfile.css"
import patient from "../icons_FEtask/patient.jpeg"


const UserProfile = ({ userID , available }) => {
  const [image, setImage] = useState('');


const dotColor = available ? 'green' : 'yellow';


  return (
    <div className="user-profile" style={{ position: 'relative' }}>
      
        <img src={patient}  className="user-avatar"  />

        <div
        className={`status-dot ${dotColor}`}
       
      ></div>
       
    </div>
  );
};

export default UserProfile;
