import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from ".";

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log('> Credentials',credential)
    console.log('> userInfos', result)
    // return result.user;
  } catch(e:any) {
    console.log('> error', e.message)
  }
}