import './dashboard.css'

export default function Dashboard(){
    return(
        <div>
            <h1 className='title_dashboard'>Dashboard</h1>
        <div className="dashboard">
    <div className="itens_dashboard">
        <h3 className="title">Diversidade de Ítens</h3>
        <p className='texto_coluna'>2</p>
    </div>

    <div className="itens_dashboard">
        <h3 className="title">Inventário Total</h3>
        <p className='texto_coluna'>2</p>
    </div>

    <div className="itens_dashboard">
        <h3 className="title">Ítens Recentes</h3>
        <p className='texto_coluna'>2</p>
    </div>

    <div className="itens_dashboard">
        <h3 className="title">Ítens Acabando</h3>
        <p className='texto_coluna'>2</p>
    </div>
    </div>
    <div className="dashboard">
        <div className="itens_recentes">
            <h3 className="title_itens_recentes">Ítens Recentes</h3>
            <h3 className="acoes">Ações</h3>
            </div>

            <div className="itens_acabando">
            <h3 className="title_itens_recentes">Ítens Acabando</h3>
            <h3>Qtd.</h3>
            <h3 className="acoes">Ações</h3>
            </div> 
            
            
    </div> 
    <div className="conteudo_itens_recentes" >oi</div>
    <div className="conteudo_itens_recentes">
            <p className='texto_conteudo'>O senhor dos aneis</p>
            <button>Ver</button>
            </div>
               
    </div>
    
    )
}