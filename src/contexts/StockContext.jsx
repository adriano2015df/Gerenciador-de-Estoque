import { createContext, useState  } from "react";
import PropTypes from "prop-types"

export const StockContext = createContext({})

export function StockContextProvider({ children}){
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('adr-stock')
    if(!storedItems) return []
    const items = JSON.parse(storedItems)
    items.forEach((item) => {
      item.createdat = new Date(item.createdat)
      item.updatedat = new Date(item.updatedat)
    })
    return items
  })

  const addItem = (item) => {
    setItems(currentState => {
      const updateItems = [item, ...currentState]
      localStorage.setItem('adr-stock', JSON.stringify(updateItems))
      return updateItems
    })
  }

  const stock = {
    items,
    addItem
  }


  return (
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  )
}