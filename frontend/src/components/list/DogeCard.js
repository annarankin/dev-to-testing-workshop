import React from 'react';
import './DogeCard.css'

const DogeCard = ({
  id,
  name,
  profile_image,
  caption,
  likes,
  onClick
}) => {
  const profileImgStyle = {
    backgroundImage: `url('${profile_image}')`
  }

  return (
    <li onClick={onClick} className="DogeCard">
      <div className="profile-img" style={profileImgStyle} />
      <h3>{name}</h3>
    </li>
  )
}

export default DogeCard
