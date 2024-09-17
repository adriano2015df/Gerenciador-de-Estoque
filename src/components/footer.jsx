import { Link } from "react-router-dom";
import './footer.css'
export default function Footer(){
    return(
      <footer>
        <div className="contact-info">
            <p>(123) 456-7890</p>
        </div>
        <div className="useful-links">
            <Link>Política de Privacidade</Link>
            <Link>Termos de Serviços</Link>
            <Link>Suporte Técnico</Link>
            <Link>Feedbeck</Link>
        </div>
        <div className="social-media">
            <Link>face</Link>
        </div>
      </footer>    
    )
}