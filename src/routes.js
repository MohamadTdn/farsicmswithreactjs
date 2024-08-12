import Home from './Pages/Home'
import Users from './Pages/Users'
import Products from './Pages/Products'
import NewProducts from './Pages/NewProducts'
import NewUser from './Pages/NewUser'
import EditUser from './Pages/EditUser'

let routes = [
    {path: '/' , element: <Home/>},
    {path: '/users' , element: <Users/>},
    {path: '/products', element: <Products/>},
    {path: '/newuser' , element: <NewUser/>},
    {path: '/newproduct' , element: <NewProducts/>},
    {path: '/edituser/:userId', element: <EditUser/>}
]

export default routes