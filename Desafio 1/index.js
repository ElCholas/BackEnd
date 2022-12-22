class ProductManager {
    constructor() {
        this.products = [];
        this.product = Product;
    }

    getProducts() {
        return this.products;
    }

    addProducts(product) {
        if (this.getProducts().find((p) => p.code == product.code)) console.log(`El producto con el codigo ${product.code} ya se encuentra en el carro`)
        else product.id = this.getProducts().length + 1; this.products.push(product)
    }
    getProductById(id) {
        const buscar = this.products.find(prod => prod.id === id)
        if (buscar) {
            console.log(buscar)
        }
        else {
            console.log(`Producto no encotrado`)
        }
    }
}


class Product extends ProductManager {
    constructor(title, description, price, thumbnail, code, stock) {
        super()
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }
}

const prod1 = {
    title: "Dance World",
    description: "Aceite CBD Dance World, el rico perfil de terpenos de Dance World infunde cada golpe con deliciosas notas de fruta, pino y especias.",
    price: 3000,
    thumbnail: "/assets/DanceWorld.jpg",
    code: "1",
    stock: 8
}
const prod2 = {
    title: "Sour Compassion",
    description: "Aceite CBD Sour Compassion, aroma a cebolla se hace mentolado al paladar, el Linalool me viene al cerebro cuando posa la lengua, con una pizca cítrica.",
    price: 3000,
    thumbnail: "/assets/SourCompassion.jpg",
    code: "2",
    stock: 10
}
const prod3 = {
    title: "Swiss Dream",
    description: "Aceite CBD Swiss Dream, su aroma a diesel y jengibre. Tiene además un fondo de cítrico interesante. Es picante, pero de forma tenue.",
    price: 2500,
    thumbnail: "/assets/SwissDram.jpg",
    code: "3",
    stock: 5
}



const newProd = new ProductManager()

newProd.addProducts(prod1)
newProd.addProducts(prod2)
newProd.addProducts(prod3)
console.log(newProd.getProducts());