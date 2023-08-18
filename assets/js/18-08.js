/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

numbers.forEach((number, index) => {
    if (number % 2 == 0) {
        console.log(`O numero ${number} está na posição ${index} do array`);
    }
})
 */

/* 
const cars = [
    {
        marca: "Ford",
        modelo: "Focus",
    },
    {
        marca : "BMW",
        modelo : "BMW Z4",
    },
    {
        marca : "Fiat",
        modelo : "Palio",
    },
    {
        marca : "Audi",
        modelo : "A3",

    }
];

cars.forEach((car)=>{

console.log(`Marca: ${car.marca} - Modelo: ${car.modelo}`);

}) */

class Carro{
    constructor(name, car){
        this.name = name;
        this.car = car;
    }
}

class ListarCarros{
    constructor(){
        this.Carros= [];
    }

    adicionar(carro){
        this.Carros.push(carro);
    }

}

const listarCarros = new ListarCarros();

function resultcars(){
    const name = document.getElementById("nameMarca").value;
    const car = document.getElementById("nameCarro").value;

    const carro = new Carro(name, car);

   listarCarros.adicionar(carro);

   console.log(`voce digitou o carro: ${name} e o modelo:${car}`);

}