import Home from './Pages/Home'
import Users from './Pages/Users'
import Products from './Pages/Products'
import NewProducts from './Pages/NewProducts'
import NewUser from './Pages/NewUser'

let routes = [
    {path: '/' , element: <Home/>},
    {path: '/users' , element: <Users/>},
    {path: '/products', element: <Products/>},
    {path: '/newuser' , element: <NewUser/>},
    {path: '/newproduct' , element: <NewProducts/>}
]

export default routes