import {
    createBrowserRouter
} from "react-router";
import Root from "./Root";
import Home from "./components/home/Home";
import AddProduct from "./components/add-product/AddProduct";
import ProductDetails from "./product_details/ProductDetails";
import Update from "./product_details/update/Update";
import Signup from "./pages/signin and signup/Signup";
import Signin from "./pages/signin and signup/Signin";
import Users from "./pages/Users/Users";

let router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'new-product-add',
                Component: AddProduct
            },
            {
                path: 'product-details/:id',
                Component: ProductDetails
            },
            {
                path: 'product-update/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
                Component: Update
            },
            {
                path: '/signUp',
                Component: Signup
            },
            {
                path: '/signIn',
                Component: Signin
            },
            {
                path: '/users',
                loader: ()=> fetch('http://localhost:3000/users'),
                Component: Users
            }

        ]
    }
]);
export { router }
