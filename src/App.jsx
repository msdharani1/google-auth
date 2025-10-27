import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <img
            src={user.photoURL}
            alt="user"
          />
          <button
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>
      )}
    </div>
  );
}

export default App;
