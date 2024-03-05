import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './Components/LCH/Products';
import Layout from './Components/Layout/Layout';
import AddProduct from './Components/LCH/AddProduct';
import NotFound from './Components/NotFound/NotFound';

let routers = createBrowserRouter([
  {path:'/' ,   element: <Layout showNavbar={true}/> , children:[
    {index: true, element: <Products/>},
    {path:'add' , element: <AddProduct/>},
    {path:'*' , element:<NotFound/>}

  ]},
]);
function App() {
   return <RouterProvider router={routers}/>;
    
}

export default App;
