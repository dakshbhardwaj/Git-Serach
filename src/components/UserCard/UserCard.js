import React from 'react';        
import './profile.css'

const UserProfile = ({userProfile}) => (
  <div className="userCard">
    <img className="avatar" src={userProfile.avatar_url} alt="Avatar Pic"/>
    <p>{userProfile.login}</p>
    <p>{userProfile.bio}</p>
  </div>
);

export default UserProfile;