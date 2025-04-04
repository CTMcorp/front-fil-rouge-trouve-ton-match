import React from "react";
import ChildComponent from "./ChildComponent";

const Message = () => {
  return (
    <>
      <h1>Page de messagerie</h1>
      <div className="message-container">
        <div className="tools" style={{display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor:'white'}}>
            <p>Name</p>
            <p>PJ</p>
            <p>More</p>
        </div>
        <ChildComponent />
      </div>
    </>
  );
};

export default Message;
