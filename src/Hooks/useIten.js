import { useState } from "react";


export default function useIten(){
    const[itens, setItens] = useState(() => {
        const storedItens = localStorage.getItem("adr-iten")
        if (!storedItens) return[]
        return JSON.parse(storedItens)
    })

    const addIten = ({ nome, quantidade, preco, categoria }) => {
        const id = Math.floor(Math.random() * 1000000)
        const iten = { id, nome, quantidade, preco, categoria }
        setItens(state => {
            const newState = [...state, iten]
            localStorage.setItem("adr-iten", JSON.stringify(newState))
            return newState
        })
    }

    return { itens, addIten}
}