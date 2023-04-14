import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import Rootlayout from "./pages/Root";
import ErrorPage from "./pages/Error";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="products" element={<ProductPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
