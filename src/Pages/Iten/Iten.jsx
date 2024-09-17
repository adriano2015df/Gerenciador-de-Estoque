import useIten from "../../Hooks/useIten"

export default function Iten(){
    const {addIten} = useIten()
    
    return(
        <div>
            <h1>Novo Íten</h1>
            <form onSubmit={useIten()}>
            <label htmlFor="nome">Nome</label>
            <input type="text" />

            <label htmlFor="quantidade">Quantidade</label>
            <input type="number" />

            <label htmlFor="preco">Preço</label>
            <input type="number" />

            <select name="categoria" >Categoria
            <option value="mesa">Mesa</option>
            <option value="cadeira">Cadeira</option>
            <option value="notebook">Notebook</option>
            <option value="celular">Celular</option>
            </select>

            <textarea name="descricao" >Descrição</textarea>
            <button>Salvar</button>
            </form>
            </div>
    )
}