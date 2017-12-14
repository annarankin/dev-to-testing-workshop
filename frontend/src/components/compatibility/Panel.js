import React from 'react';
import './Panel.css'

const Panel = ({
  name,
  profile_image,
  caption,
  likes,
}) => {
  const profileImgStyle = {
    backgroundImage: `url('${profile_image}')`
  }

  return (
    <div className="Panel">
      <div className="profile-img" style={profileImgStyle} />

      <table>
        <thead>
          <tr><th>{name}</th></tr>
        </thead>

        <tbody>
          <tr><td>"{caption}"</td></tr>
          <tr><td>Likes: {likes.join(', ')}</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default Panel
