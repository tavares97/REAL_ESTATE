import { Layout, PrivateRoute } from "./routes/Layout";
import {
  LoaderFunctionArgs,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { postsLoader, savedPostsLoader, singlePostLoader } from "./lib/loader";

import CreatePostPage from "./routes/CreatePostPage";
import HomePage from "./routes/HomePage";
import ListPage from "./routes/ListPage";
import LoginPage from "./routes/LoginPage";
import ProfilePage from "./routes/ProfilePage";
import ProfileUpdatePage from "./routes/ProfileUpdatePage";
import Register from "./routes/Register";
import SinglePost from "./routes/SinglePost";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: ({ request }: LoaderFunctionArgs) => postsLoader(request),
        },
        {
          path: "/list/:id",
          element: <SinglePost />,
          loader: ({ params }: LoaderFunctionArgs) =>
            singlePostLoader({ id: params.id }),
        },
      ],
    },
    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: () => savedPostsLoader(),
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/post/create",
          element: <CreatePostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
