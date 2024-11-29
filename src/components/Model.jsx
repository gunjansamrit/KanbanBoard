import React, { useEffect, useRef } from "react";
import "./Model.css";

const Modal = ({ groupBy, sortBy, setGroupBy, setSortBy, handleSave, handleClose }) => {
  const modalRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleSave(); 
        handleClose(); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose, handleSave]);

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal">
        <div className="grouping">
          <div className="inLine">
            <h5>Grouping</h5>
            <select
              value={groupBy}
              onChange={(e) => setGroupBy(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>

        <div className="sorting">
          <div className="inLine">
            <h5>Ordering</h5>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
