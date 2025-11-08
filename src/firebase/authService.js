import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "./firebase";  

const handleLogout = async () => {
  try {
    await logoutUser();
    // clear local stuff
    localStorage.removeItem("profilePic");
    navigate("/");
  } catch (err) {
    console.error(err);
  }
};
// Register
export const registerUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Login
export const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const logoutUser = async () => {
  return await signOut(auth);
};
