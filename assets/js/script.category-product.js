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
        return this.categories.find((category) => category.id == id);
    }
    //update
    updateCategory(id, name) {
        const category = this.getCategoryById(id);
        category.name = name;
    }
    //delete
    //esse id é o parametro q esta dentro do () do onclick
    deleteCategory(id) {
        const category = this.getCategoryById(id);
        const index = this.categories.indexOf(category);
        

        this.categories.splice(index, 1)
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
    const categoryName1 = "shoes";
    const categoryName2 = "books";
    //document.getElementById
    console.log("categorias criadas!")

    categoriesList.addCategory(categoryName);
    categoriesList.addCategory(categoryName1);
    categoriesList.addCategory(categoryName2);

    /* console.log(categoriesList.categories) */
}

function createProduct() {
    const productName = "Choco";
    const productPrice = 0.50;
    const productCategory = categoriesList.categories[0]; //[0] pq pegou a primeira  categoria criada

    productsList.addProduct(productName, productPrice, productCategory);

    console.log(productsList.products);

}

function findCategory(id) {
    const category = categoriesList.getCategoryById(id);
    console.log(category.name);
}

function editCategory(id, name) {
    categoriesList.updateCategory(id, name);

    console.log(categoriesList.categories);
}
