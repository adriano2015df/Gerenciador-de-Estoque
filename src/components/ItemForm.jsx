import { useState } from "react"
import './itemForm.css'
import StockItem, { CATEGORIES } from "../Entites/StockItem"
import useStock from "../Hooks/useStock"


export default function ItemForm (itemToUpdate){
  const defaultItem = {
    name: "", 
    description: "",
    quantity:"",
    price:0,
    category:""
  }

  const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)
  const {addItem} = useStock()
const handleChange = (ev) => {
  setItem(currentState => {
    return {
      ...currentState,
      [ev.target.name]: ev.target.value
    }
  })
}

const handleSubmit =(ev) => {
  ev.preventDefault()

  try {
    const validItem = new StockItem(item)
    addItem(validItem)
  } catch (error) {
    console.log(error.message)
  }
}

 return (
<form onSubmit={handleSubmit}>
    <div className="row">
      <div>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name"
        id="name"
        required 
        value={item.name}
        onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="quantity">Quantidade</label>
        <input type="number" name="quantity"
        id="quantity"
        required min={0}
        step={1}
        value={item.quantity}
        onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="price">Preço</label>
        <input type="number" name="price"
        id="price"
        required min={0.00}
        step={0.01}
        value={item.price}
        onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select name="category"
        id="category"
        required
        value={item.category}
        onChange={handleChange}>
          <option disabled value="">Selecione uma Categoria</option>
          {CATEGORIES.map((category) => (
            <option key={category}
            value={category}
            defaultChecked={item.category === category}>
              {category}
            </option>
          ))}
       </select>
      </div>
      </div>
      <div className="form-control">
        <label htmlFor="description">Descrição</label>
        <textarea name="description" id="description"
        required rows={6}
        value={item.description}
        onChange={handleChange}></textarea>
    </div>
    <div className="save">
    <button >Salvar</button>
    </div>
  </form>
 )
}