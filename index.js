const ProductManager = require("./class/ProductManager")
const [aceite] = require("./productos")

const products = new ProductManager("./database/db.json")

/*   Obtener Productos */
/*   products.getProducts()  */ 

/*   Añadir productos */
  products.addProduct(aceite);  

/*   Obtener producto por id */
/*  products.getProductById(1);  */

 /*  Actualizar producto por id */
/*  products.updateProduct(2, { stock: 15 })  */

/*  Eliminar producto por id */
/*  products.deleteProductById(2);  */

/*   Eliminar todos los productos */
/*  products.deleteAll();  */ 