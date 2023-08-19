import React, { useEffect, useState } from "react";

const Profile = ({ user }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      const response = await fetch(`https://dummyjson.com/users/${user.id}`);
      const data = await response.json();
      setProfileData(data);
    };

    fetchProfileData();
  }, [user.id]);

  return (
    <div>
      <h2>Welcome to your profile</h2>
      {profileData && (
        <div>
          <p>Username: {profileData.username}</p>
          <p>Email: {profileData.email}</p>
          <p>Location: {profileData.location}</p>
          {/* Display other user information as needed */}
        </div>
      )}
    </div>
  );
};

export default Profile;
