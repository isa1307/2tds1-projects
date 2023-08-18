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
    //read
    getProductById(id){
        return this.products.find((product) => product.id == id );
    }

}

const categoriesList = new CategoryService();
const productsList = new ProductService();

function createCategory() {
    const categoryName = document.getElementById("categoryNameInput").value;

    categoriesList.addCategory(categoryName);

    clearFields();


/*     const categoryName = "Candies";
    const categoryName1 = "shoes";
    const categoryName2 = "books"; */
    //document.getElementById
  /*   console.log("categorias criadas!")

    categoriesList.addCategory(categoryName);
    categoriesList.addCategory(categoryName1);
    categoriesList.addCategory(categoryName2);
 */
     console.log(categoriesList.categories) 
}

function createProduct() {
    const productName = "Choco";
    const productName1 = "snaker";
    const productName2 = "hp";

    const productPrice = 0.50;
    const productPrice1 = 100;
    const productPrice2 = 50;
    const productCategory = categoriesList.categories[0]; //[0] pq pegou a primeira  categoria criada
    const productCategory1 = categoriesList.categories[1];
    const productCategory2 = categoriesList.categories[2];

    productsList.addProduct(productName, productPrice, productCategory);
    
    productsList.addProduct(productName1, productPrice1, productCategory1);
    
    productsList.addProduct(productName2, productPrice2, productCategory2);

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

function deleteCategory(id){
    categoriesList.deleteCategory(id);

    console.log(categoriesList.categories)
}

function findProductById(id){
    const product = productsList.getProductById(id);

    console.log(product);
}

function clearFields(){
document.getElementById("categoryNameInput").value = "";

}