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

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 1;
    }

    addCategory(name){
        const id = this.nextCategoryId;
        this.nextCategoryId++;

        const category = new Category(id, name);
        this.categories.push(category);

    }
}

const categoriesList = new CategoryService();

function createCategory(){
    const categoryName = "Candies";

    categoriesList.addCategory(categoryName);

    console.log(categoriesList.categories)
}