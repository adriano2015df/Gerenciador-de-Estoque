
import useIten from '../../Hooks/useIten'
import './home.css'

export default function Home(){

    
    return(
        <main>
            <div className="welcome-banner">
                <h1>Bem vindo ao sistema de Gerenciamneto de Ítens!</h1>
                <p className='date'>data</p>
                <p className='quote'>Um jeito fácil de Gerenciar todos os ítens de sua loja!</p>
            </div>
            <div className="dashboard-cards">
                <div className="card item-running">
                    <h2>Ítens Acabando</h2>
                    <div className="progress-ring">
                </div>
                <p>34</p>
            </div>
            <div className="card item-recenctle">
                <h2>Ítens Adicionados recentemente</h2>
                <p>56</p>
            </div>
            </div>
        </main>
    )

}