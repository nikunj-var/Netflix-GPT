import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  // to navigate user from one page to another page

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  // This is called when user do signin/signup and signout.
 
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
