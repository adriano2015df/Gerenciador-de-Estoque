import { Link } from "react-router-dom";
import './header.css'
export default function Header(){
    return(
      <header>
        <div className="logo">
          <Link>ADR Gerenciamento de Estoque</Link>
        </div>
        <nav>
          <ul>
            <li><Link>Home</Link></li>
            <li><Link>Ítens</Link></li>
          </ul>
          </nav>
      </header>    
    )
}