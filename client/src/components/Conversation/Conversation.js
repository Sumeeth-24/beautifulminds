import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../api/index.js";
const Conversation = ({ data, currentUser, online }) => {

  const [userData, setUserData] = useState(null)
  const dispatch = useDispatch()

  useEffect(()=> {

    const userId = data.members.find((id)=>id!==currentUser.result._id)
   
    const getUserData = async ()=> {
      try
      {
          const {data} =await getUser(userId)
         setUserData(data)
         dispatch({type:"SAVE_USER", data:data})
      }
      catch(error)
      {
        console.log(error)
      }
    }

    getUserData();
  }, [])
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div>
        {online  && <div style={{backgroundColor: "greenyellow", borderRadius: "50%", position: "absolute",left: "2rem",width:"1rem",
  height: "1rem"}}></div>}
        <Avatar  alt={currentUser?.result?.name} src={currentUser?.result?.imageUrl}>{currentUser?.result?.name.charAt(0)}</Avatar>
          
        
          <div style={{fontSize: '0.8rem', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start"}}>
            <span>{currentUser?.result.name}</span>
            <span style={{color: online?"#51e200":""}}>{online? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;