import React,{ useEffect, useState } from "react";
import {doc, getDoc} from "firebase/firestore"
import {db} from "../firebase"

import "./profile.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function Profile() {
  let cUser = useContext(AuthContext);
  let [user, setUser] = useState();
  let [pageLoading, setPageLoading] = useState(true);
  useEffect(function fun(){
    (async function(){
      //get user
      //docRef

      // Firebase version 8
      // var docRef = db.collection("users").doc(user.uid);
      // let userObj = await docRef.get();

      // Firebase version 9
      const docRef = doc(db,"users", cUser.uid);
      const userObj = await getDoc(docRef);
      console.log("Document data: ",userObj.data());
      setUser(userObj.data());
      setPageLoading(false);
    })()
  },[])

  return (
    <>
      {pageLoading==true ? (<div>Loading...</div>) : 
          (
          <>
            <div className="header"></div>
            <div className="main">
              <div className="pimg_container">
                <img
                  src={user.profileImgUrl}
                  alt=""
                  className="pimg"
                />
              </div>
              <div className="details">
                <div className="content">{user.name}</div>
                <div className="content">
                  No. of Posts: {user.reelsIds.length}<span className="bold_text">Posts</span>
                </div>
                <div className="content">
                  Email <span className="bold_text">{user.email}</span>
                </div>
              </div>
            </div>
          </>
        )}
    </>
  );
}

export default Profile;
