

import { createBrowserRouter } from "react-router-dom";
import Estoque from "./Pages/Estoque/Estoque";
import Iten from "./Pages/Iten/Iten";
import RouterLayout from "./components/RouterLayout";
import Home from "./Pages/Home/Home";


const router = createBrowserRouter ([
    {
        path: "/",
        element: <RouterLayout />,
        children:[{
            index: true,
            element:<Home/>
        },{
                path: "iten",
                element: <Iten/>
            },
            {
                path: "estoque",
                element: <Estoque/>
            }
        ]
    }
])

export default router;