//cada categoria que possui vários produtos, cada produto é pertencente a uma categoria
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //pq cada categoria tem varios produtos
        this.products = [];
    }
}

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

//guardas todas categorias e cria
class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 1;
    }

    addCategory(name) {
        const id = this.nextCategoryId;
        this.nextCategoryId++;

        const category = new Category(id, name);
        this.categories.push(category);

    }

    //read 
    getCategoryById(id) {
        return this.categories.find((category) => category.id == id)
    }
}

class ProductService {
    constructor() {
        this.products = [];
        this.nextProductId = 1;

    }
    addProduct(name, price, category) {
        const id = this.nextProductId;
        this.nextProductId++;

        const product = new Product(id, name, price, category);

        this.products.push(product);
        category.products.push(product)

    }

}

const categoriesList = new CategoryService();
const productsList = new ProductService();

function createCategory() {
    const categoryName = "Candies";
    //document.getElementById

    categoriesList.addCategory(categoryName);

    /* console.log(categoriesList.categories) */
}

function createProduct() {
    const productName = "Choco";
    const productPrice = 0.50;
    const productCategory = categoriesList.categories[0]; //[0] pq pegou a primeira  categoria criada

    productsList.addProduct(productName, productPrice, productCategory);

    console.log(productsList.products);

}