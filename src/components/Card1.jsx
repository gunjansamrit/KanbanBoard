import React from "react";
import "./Card1.css";
import PriorityIcon from "./PriorityIcon";
import UserProfile from "./UserProfile";
import StatusIcons from "./StatusIcons";


const Card1 = ({ ticket ,showCardStatus,showUserProfile}) => {
  const { id, title, tag, userImage, priority, userName,status,available } = ticket;
  console.log(ticket);

 
  
  
  const image = "";

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-flex">
        <span className="card-id">{id}</span>
        <div className="card-user">
        {!showUserProfile && 
      <UserProfile userID = {id} available={available}/>
        }
      </div>
        </div>
      </div>
      <div className="card-title">
      <div style={{ paddingRight: '5px', marginRight: '5px' }}>
        {showCardStatus && 
        <StatusIcons status = {status}/>}
        </div>
        {title}
        
        </div>
      <div className="card-tags">
        <div className="card-priority">
        <PriorityIcon priority={priority} /> 
         
        </div>
        <div className="card-tag">
  {tag.map((t, index) => (
    <span className="tag-item" key={index}>
      &bull; {t}
    </span>
  ))}
</div>
      </div>
      
    </div>
  );
};

export default Card1;
