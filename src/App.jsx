import LoggedInScreen from "./components/LoggedInScreen";
import AuthScreen from "./components/AuthScreen";
import ErrorPage from "./components/ErrorPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <ProtectedRoute>
//         <LoggedInScreen />
//       </ProtectedRoute>
//     ),
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthScreen />,
  },
  { path: "/", element: <LoggedInScreen />, errorElement: <ErrorPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
