import { db, storage, auth } from "./firebase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// ✅ Save profile details to Firestore
export const saveProfile = async (profileData) => {
  const user = auth.currentUser;
  if (!user) return;

  await setDoc(doc(db, "users", user.uid), profileData, { merge: true });
  console.log("✅ Profile Saved to Firestore");
};

// ✅ Get profile data
export const getProfile = async () => {
  const user = auth.currentUser;
  if (!user) return null;

  const snap = await getDoc(doc(db, "users", user.uid));
  return snap.exists() ? snap.data() : null;
};

// ✅ Upload profile picture to Firebase Storage
export const uploadProfileImage = async (file) => {
  const user = auth.currentUser;
  if (!user) return null;

  const imgRef = ref(storage, `profileImages/${user.uid}`);
  await uploadBytes(imgRef, file);

  const imgURL = await getDownloadURL(imgRef);

  // Save image URL to Firestore
  await updateDoc(doc(db, "users", user.uid), { photo: imgURL });

  return imgURL;
};
