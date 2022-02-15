import { signInWithPopup } from "firebase/auth";
import { auth, provider } from ".";

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider)
    return result.user.displayName;
  } catch {
    return null
  }
}