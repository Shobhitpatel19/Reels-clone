import React from 'react'
import "./feed.css";

function Feed() {
  return (
    <>
      <div className="header">
        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" 
        alt="" className="insta_img" />
        <img src="https://media.licdn.com/dms/image/C4D03AQHpxH_gGPK6rg/profile-displayphoto-shrink_400_400/0/1638018321121?e=1703721600&v=beta&t=vSvHj_nU2wDnsetRKQeCWwfNlh8_iGISO8VFlkc0qGQ" 
        alt="" className="profile_img" />
      </div>
      <div className="main_container">
        <div className="upload_container">
        <i className='movie_icon fa-solid fa-clapperboard'></i>
        <div className="upload_text">UPLOAD</div>
        </div>
        <div className="reels_container">Reels</div>
      </div>
    </>
  )
}

export default Feed