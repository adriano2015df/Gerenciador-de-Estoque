import { Link } from "react-router-dom";
import './estoque.css'
import useIten from './../../Hooks/useIten'

export default function Estoque(){
    const { itens, addIten} = useIten()

    return(
        <div>
            <h1>Ítens no Estoque</h1>
            <div className="links">
                <Link to="/">Início</Link>
                <Link to="iten">Adicionar Íten</Link>
                <hr />
            </div>
            <div className="dados">
                <h3>ID</h3>
                <h3>Nome</h3>
                <h3>Em Estoque</h3>
                <h3>Categoria</h3>
                <h3>Ações</h3>
            </div>
            <div className='itens'>
                {itens.map((iten) =>(
            <ul>
                <li>key={iten.id}</li>
                <li>{iten.nome}</li>
            </ul>
            ))}
            </div>
        </div>
    )
}