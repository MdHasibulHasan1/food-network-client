import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
const LoginWithGitHubAndGoogle = () => {
  const { signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn my-3 btn-outline hover:btn-primary w-full"
      >
        <FaGoogle /> <span className="ml-3">Login with Google</span>
      </button>
      <button
        onClick={handleGitHubSignIn}
        className="btn  btn-outline hover:btn-primary w-full"
      >
        <FaGithub /> <span className="ml-3">Login with GitHub</span>
      </button>
    </div>
  );
};

export default LoginWithGitHubAndGoogle;
