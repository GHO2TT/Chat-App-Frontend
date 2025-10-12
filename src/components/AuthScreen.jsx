import ChatIcon from "./icons/ChatSvgIcon.jsx";
import FormContainer from "./formContainer.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import axios from "../../utils/axios";

import { useState } from "react";
const AuthScreen = () => {
  const [auth, setAuth] = useState("login");
  const [authDetails, setAuthDetails] = useState({});
  const username = useRef();
  const password = useRef();
  const email = useRef();
  // inspo
  // const [isLoading, setLoading] = useState(false);
  // const [messages, setMessages] = useState([]);
  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get("/api/v1/message")
  //     .then((res) => {
  //       setMessages(res.data);
  //       console.log(res.data, "Line 13 ChatScreen.jsx");
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // }, []);
  // if (isLoading)
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="loader"></div>
  //     </div>
  //   );

  function handleSwitch() {
    // console.log("clicked");
    setAuth((prev) => (prev === "login" ? "signup" : "login"));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);

    setAuthDetails((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="auth-screen h-screen flex flex-col md:flex-row bg-[#37353E] justify-center items-center ">
      <div className="w-[100%] h-[60%] sm:h-[100%] flex flex-col justify-end md:justify-center items-center md:pl-[100px]">
        <ChatIcon width={120} height={120} stroke="white" strokeWidth={2} />
        <h1 className="font-bold">Welcome to</h1>
        <h1 className="text-5xl font-bold">Vortex</h1>
      </div>
      <AnimatePresence mode="wait">
        {auth === "signup" ? (
          <motion.div
            key="signup"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <FormContainer>
              <form
                className="flex flex-col gap-3 pb-2 w-[300px]"
                onSubmit={handleSubmit}
              >
                <h1 className="text-2xl font-bold">Sign Up</h1>
                <div>
                  <h1>Username</h1>
                  <input
                    className="bg-gray-800 rounded-xl p-2 w-[100%]"
                    ref={username}
                    name="username"
                    type="text"
                  />
                </div>
                <div>
                  <h1>Email</h1>
                  <input
                    className="bg-gray-800 rounded-xl p-2 w-[100%]"
                    ref={email}
                    name="email"
                    type="email"
                  />
                </div>
                <div>
                  <h1>Password</h1>
                  <input
                    className="bg-gray-800 rounded-xl p-2 w-[100%]"
                    ref={password}
                    name="password"
                    type="password"
                  />
                </div>
                <button className="bg-green-700 hover:bg-green-900 rounded-xl p-2">
                  Sign Up
                </button>
              </form>
              <p>
                Have an Account?{" "}
                <span
                  onClick={handleSwitch}
                  className="hover:text-blue-300 text-blue-500"
                >
                  Login Here
                </span>
              </p>
            </FormContainer>
          </motion.div>
        ) : (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <FormContainer>
              <form
                className="flex flex-col gap-3 pb-2 w-[300px]"
                onSubmit={handleSubmit}
              >
                <h1 className="text-2xl font-bold">Login</h1>
                <div>
                  <h1>Email</h1>
                  <input
                    className="bg-gray-800 rounded-xl p-2 w-[100%]"
                    ref={username}
                    name="email"
                    type="email"
                  />
                </div>
                <div>
                  <h1>Password</h1>
                  <input
                    className="bg-gray-800 rounded-xl p-2 w-[100%]"
                    ref={username}
                    name="password"
                    type="password"
                  />
                </div>
                <button className="bg-green-700 hover:bg-green-900 rounded-xl p-2">
                  Login{" "}
                </button>
              </form>
              <p>
                Don't have an account?{" "}
                <span
                  onClick={handleSwitch}
                  className="hover:text-blue-300 text-blue-500"
                >
                  Sign Up Here
                </span>
              </p>
            </FormContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthScreen;
