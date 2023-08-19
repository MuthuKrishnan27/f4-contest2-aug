import React, { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <div>
      {!loggedInUser ? <Login onLogin={handleLogin} /> : <Profile user={loggedInUser} />}
    </div>
  );
};

export default App;
