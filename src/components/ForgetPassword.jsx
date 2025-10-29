const ForgetPassword = () => {
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

      <div className="auth-screen h-screen flex flex-col md:flex-row bg-[#37353E] justify-center items-center ">
        <div className="w-[100%] h-[60%] sm:h-[100%] flex flex-col justify-end md:justify-center items-center md:pl-[300px]">
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
                      name="username"
                      type="text"
                      required
                      onChange={(event) => {
                        handleInputChange("username", event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <h1>Email</h1>
                    <input
                      className="bg-gray-800 rounded-xl p-2 w-[100%]"
                      name="email"
                      type="email"
                      required
                      onChange={(event) => {
                        handleInputChange("email", event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <h1>Password</h1>
                    <input
                      className="bg-gray-800 rounded-xl p-2 w-[100%]"
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
                    <h1>Confirm Password</h1>
                    <input
                      className="bg-gray-800 rounded-xl p-2 w-[100%]"
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
                      name="email"
                      type="email"
                      required
                      onChange={(event) => {
                        handleInputChange("email", event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <h1>Password</h1>
                    <input
                      className="bg-gray-800 rounded-xl p-2 w-[100%]"
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
    </>
  );
};

export default ForgetPassword;
