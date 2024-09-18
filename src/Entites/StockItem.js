export const CATEGORIES = [
    "Jogos",
    "Livors",
    "Brinquedos",
    "Acessórios"
  ]


export default class StockItem{
    constructor({ name,quantity, description, price, category}){
      this.id = Math.floor(Math.random() * 10000000)
      this.name = name
      this.quantity = +quantity
      this.description = description
      this.price = +price
      this.category = category
      this.creatdAt = new Date()
      this.updateAt = new Date()  
      this.#validate()
    }

    #validate(){
        const validName = typeof this.name === "string"
        const validDescription = typeof this.description === "string"
        const validQuantity = typeof this.quantity === "number" && Number.isInteger(this.quantity)
        const validPrice = typeof this.price === "number"
        const validCategory = CATEGORIES.includes(this.category)
        if(!(
            validName &&
            validDescription &&
            validQuantity &&
            validPrice &&
            validCategory
        )){
            throw new Error("Invalid Item!")
        }
    }
}