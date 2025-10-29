import ChatIcon from "./icons/ChatSvgIcon.jsx";
import FormContainer from "./formContainer.jsx";
import { motion, AnimatePresence } from "framer-motion";
import axios from "../../utils/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionButton from "./UI/actionButton.jsx";
import NotificationModal from "./UI/NotificationModal.jsx";
import { setUserCookie, setTokenCookie } from "../utils/cookies.js";
const AuthScreen = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState("login");
  const [loading, setLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(undefined);
  const [authDetails, setAuthDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleInputChange(identifier, value) {
    setAuthDetails((prev) => {
      return { ...prev, [identifier]: value };
    });
  }
  // console.log(authDetails);

  function handleSwitch() {
    setAuth((prev) => (prev === "login" ? "signup" : "login"));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const urlPath = auth === "login" ? "login" : "signup";

    const userInput =
      auth === "login"
        ? {
            email: authDetails.email,
            password: authDetails.password,
          }
        : {
            username: authDetails.username,
            email: authDetails.email,
            password: authDetails.password,
            confirmPassword: authDetails.confirmPassword,
          };

    axios
      .post(`/api/v1/users/${urlPath}`, userInput)
      .then((res) => {
        // Store token and user data in cookies
        if (res.data.token) {
          setTokenCookie(res.data.token);
        }
        if (res.data.data?.user) {
          setUserCookie(res.data.data.user);
        }
        // console.log(res.data, "line 62");

        setNotificationMessage({
          status: res.data.status,
          message:
            res.data.message ||
            `${auth === "login" ? "Login" : "Signup"} successful!`,
        });

        setTimeout(() => {
          setNotificationMessage(undefined);
          // Redirect to home page after successful auth
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        // console.log(err.response?.data?.message);
        setNotificationMessage({
          status: err.response?.data?.status || "error",
          message: err.response?.data?.message || "Something went wrong",
        });

        setTimeout(() => {
          setNotificationMessage(undefined);
        }, 2000);
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      {notificationMessage ? (
        <NotificationModal
          message={notificationMessage.message}
          status={notificationMessage.status}
        />
      ) : (
        ""
      )}

      <div className="auth-screen h-screen flex flex-col md:flex-row bg-[#37353E] justify-center items-center px-4">
        <div className="w-[100%] h-[50%] sm:h-[100%] flex flex-col justify-end md:justify-center items-center md:pl-[300px]">
          <ChatIcon
            width={80}
            height={80}
            stroke="white"
            strokeWidth={2}
            className="sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
          />
          <h1 className="font-bold text-sm md:text-base">Welcome to</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Vortex</h1>
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
                  className="flex flex-col gap-2.5 md:gap-3 pb-2 w-[280px] sm:w-[300px]"
                  onSubmit={handleSubmit}
                >
                  <h1 className="text-xl md:text-2xl font-bold">Sign Up</h1>
                  <div>
                    <h1 className="text-sm md:text-base">Username</h1>
                    <input
                      className="bg-gray-800 rounded-xl p-2 w-[100%] text-sm md:text-base"
                      name="username"
                      type="text"
                      required
                      onChange={(event) => {
                        handleInputChange("username", event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <h1 className="text-sm md:text-base">Email</h1>
                    <input
                      className="bg-gray-800 rounded-xl p-2 w-[100%] text-sm md:text-base"
                      name="email"
                      type="email"
                      required
                      onChange={(event) => {
                        handleInputChange("email", event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <h1 className="text-sm md:text-base">Password</h1>
                    <input
                      className="bg-gray-800 rounded-xl p-2 w-[100%] text-sm md:text-base"
                      name="password"
                      type="password"
                      required
                      minLength={8}
                      onChange={(event) => {
                        handleInputChange("password", event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <h1 className="text-sm md:text-base">Confirm Password</h1>
                    <input
                      className="bg-gray-800 rounded-xl p-2 w-[100%] text-sm md:text-base"
                      name="confirm_password"
                      type="password"
                      required
                      minLength={8}
                      onChange={(event) => {
                        handleInputChange(
                          "confirmPassword",
                          event.target.value
                        );
                      }}
                    />
                  </div>
                  {/* {errorMessage ? (
                  <p className="text-red-400 text-[15px]">{errorMessage}</p>
                ) : (
                  ""
                )} */}
                  <ActionButton status={loading}>
                    {loading ? "Signing Up" : "Sign Up"}
                  </ActionButton>
                </form>
                <p className="text-sm md:text-base">
                  Have an Account?{" "}
                  <span
                    onClick={handleSwitch}
                    className="hover:text-blue-300 text-blue-500 cursor-pointer"
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
                  className="flex flex-col gap-2.5 md:gap-3 pb-2 w-[280px] sm:w-[300px]"
                  onSubmit={handleSubmit}
                >
                  <h1 className="text-xl md:text-2xl font-bold">Login</h1>
                  <div>
                    <h1 className="text-sm md:text-base">Email</h1>
                    <input
                      className="bg-gray-800 rounded-xl p-2 w-[100%] text-sm md:text-base"
                      name="email"
                      type="email"
                      required
                      onChange={(event) => {
                        handleInputChange("email", event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <h1 className="text-sm md:text-base">Password</h1>
                    <input
                      className="bg-gray-800 rounded-xl p-2 w-[100%] text-sm md:text-base"
                      name="password"
                      type="password"
                      required
                      minLength={8}
                      onChange={(event) => {
                        handleInputChange("password", event.target.value);
                      }}
                    />
                  </div>
                  {/* {errorMessage ? (
                  <p className="text-red-400 text-[15px]">{errorMessage}</p>
                ) : (
                  ""
                )} */}

                  <ActionButton status={loading}>
                    {loading ? "logging in" : "login"}
                  </ActionButton>
                </form>
                <p className="text-sm md:text-base">
                  Don't have an account?{" "}
                  <span
                    onClick={handleSwitch}
                    className="hover:text-blue-300 text-blue-500 cursor-pointer"
                  >
                    Sign Up Here
                  </span>
                </p>
              </FormContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AuthScreen;
