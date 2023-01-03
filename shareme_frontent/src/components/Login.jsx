import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";

const Login = () => {
  return (
    <>
      <div className="flex justify-start items-center flex-col h-screen">
        Login
      </div>
      <div className="relative w-full h-full">
        <video src=""></video>{" "}
      </div>
      <div></div>
    </>
  );
};

export default Login;
