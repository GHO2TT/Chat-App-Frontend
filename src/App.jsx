import LoggedInScreen from "./components/LoggedInScreen";
import AuthScreen from "./components/AuthScreen";
import ErrorPage from "./components/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ForgetPassword from "./components/ForgetPassword";
import ProtectAuthRoute from "./components/ProtectAuthRoute";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: (
      <ProtectAuthRoute>
        <AuthScreen />
      </ProtectAuthRoute>
    ),
  },
  {
    path: "/forgetpassword",
    element: <ForgetPassword />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <LoggedInScreen />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
