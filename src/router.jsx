

import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List_Item from "./Pages/Item/List_Item";
import Root_Layout from "./components/Root_Layout";
import Items_Layout from "./Pages/Item/Items_Layout";
import Add_Item from "./Pages/Item/Add_Item";


const router = createBrowserRouter ([{
    path:"/",
    element: <Root_Layout/>,
    children: [
        { index: true, element: <Home/> },
        {
            path: "itens",
            element:<Items_Layout/>,
            children:[
                {index: true, element: <List_Item/> },
                {path: "adicionar", element: <Add_Item/> }
                
            ]
        }
    ]
    }
])

export default router;