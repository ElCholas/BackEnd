const fs = require('fs')

class ProductManager {
    constructor(filepaht) {
        this.filepaht = filepaht;

    }

    async #readfile() {
        try{ 
        const content = await fs.promise.readfile(this.filepaht, 'utf-8')
        const parseContent = JSON.parse(content)
        return parseContent
    } catch(error) {
        console.log(error)
    }
    }

    async #checkProductCode(code) {
        const fileContent = await this.#readfile()
        return fileContent.find((objeto) => objeto.code === code)
    }

    async getProducts() {
        const fileContent = await this.#readfile()
        try {
            if (fileContent.length === 0) throw new Error("No se encontro el producto.")
            else console.log(fileContent)
        } catch (error) {
            console.log("No se encontro el producto.")
        }
    }

    async addproduct(obj) {
        const fileContent = await this.#readfile()
        if (await this.#checkProductCode(obj.code)) return console.log('Error. El producto con el codigo ${obj.code} ya existe.')
        try {
            if (fileContent.length !== 0) await fs.promises.writeFile(this.filePath, JSON.stringify([...fileContent, { ...obj, id: fileContent[fileContent.length - 1].id + 1 },], null, 2), "utf-8")
            else await fs.promises.writeFile(this.filePath, JSON.stringify([{ ...obj, id: 1 }]), "utf-8")
        } catch (error) {
            console.log(error)
        }
    }

    async getProductById(id) {
        try {
            const fileContent = await this.#readFile()

            if (!fileContent.find((objeto) => objeto.id === id)) throw new Error(`Error. No se encontraron productos con id ${id}.`)
            else console.log(fileContent.find((objeto) => objeto.id === id))
        } catch (error) {
            console.log(`Error. No se encontraron productos con id ${id}.`)
        }
    }

    async updateProduct(id, obj) {
        try {
            const fileContent = await this.#readFile()
            const updated = fileContent.map((producto) => producto.id === id ? { ...producto, ...obj } : producto)

            if (!fileContent.find((objeto) => objeto.id === id)) throw new Error(`Error. No se encotraron productos con id ${id}.`)
            else await fs.promises.writeFile(this.filePath, JSON.stringify(updated, null, 4))

        } catch (error) {
            console.log(`Error. No se pudo actualizar el producto con id ${id}.`)
        }
    }


    async deleteProductById(id) {
        try {
            const fileContent = await this.#readFile()
            const updated = fileContent.filter((producto) => producto.id !== id)

            if (!fileContent.find((objeto) => objeto.id === id)) throw new Error(`Error. No se encotraron productos con id ${id}.`)
            else await fs.promises.writeFile(this.filePath, JSON.stringify(updated, null, 4))
        } catch (error) {
            console.log(`Error. no se pudo eliminar el producto con id ${id}.`)
        }
    }


    async deleteAll() {
        await fs.promises.writeFile(this.filePath, JSON.stringify([]), 'utf-8')
    }
}



module.exports = ProductManager