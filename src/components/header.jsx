import { Link } from "react-router-dom";
import './header.css'
import { IoMdHome } from "react-icons/io";
export default function Header(){
    return(
      <header>
        <div className="logo">
          <Link>ADR Gerenciamento de Estoque</Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/"><IoMdHome /></Link></li>
            <li><Link to="/itens">Listar Ítens</Link></li>
          </ul>
          </nav>
      </header>    
    )
}