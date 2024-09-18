
    import { Link, Outlet, useLocation } from "react-router-dom";
    import './layout.css'
    export default function Items_Layout(){
        const { pathname} = useLocation()
        return (
            <main>
                <div className="tabs">
                    <Link to="/itens" 
                    className={`tab ${pathname === "/itens" ? "active" : ""}`}>Todos os Ítens</Link>
                    <Link to="/itens/adicionar" 
                    className={`tab ${pathname === "/itens/adicionar" ? "active" : ""}`}>Adicionar Íten</Link>
                </div>
                <Outlet/>
            </main>
        )
    }