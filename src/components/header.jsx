import { Link } from "react-router-dom";
import './header.css'
export default function Header(){
    return(
        <nav>
        <div class="header">
         <h1>ADR STOCK</h1>
         <div className="links">
        <a href="">Início</a>
        <a href="">Itens</a>
        </div>
        </div>
      </nav> 
    )
}