document.addEventListener("DOMContentLoaded", main);
class Filling{
    constructor(name,price){
        this.name = name
        this.price = price
    }
}
class Pizza{
    constructor(name, image, price, id=-1, fillings,gluteeniton=false,valkosipuli=false){
        this.name = name
        this.image = image
        this.price = price
        this.fillings = fillings
        this.id = id
        this.gluteeniton = gluteeniton
        this.valkosipuli = valkosipuli

    }
}


var fillings = init_fillings()
var pizzas = init_pizzas()

function main() {
    orders = JSON.stringify([])
    localStorage.setItem("orders",orders)
}

function init_fillings() {
    fillings = {
        karamellisoitu_sipuli : new Filling("Karamellisoitu sipuli", 1),
        pekoni : new Filling("Pekoni",1),
        mozzarellajuusto : new Filling("Mozzarellajuusto",1),
        bbq_kastike : new Filling("BBQ-kastike",1),
        kana : new Filling("Kana",1),
        tomaatti : new Filling("Tomaatti",1),
        basilika : new Filling("Basilika",1),
        parmesaanijuusto : new Filling("Parmesaanijuusto",1),
        valkosipulijuusto : new Filling("Valkosipulijuusto",1),
        herkkusieni : new Filling("Herkkusieni",1),
        juustoraaste : new Filling("Juustoraaste",1),
        oregano : new Filling("Oregano",0),
        oliivi : new Filling("Oliivi",1),
        rucola : new Filling("Rucola",1),
        tonnikala : new Filling("Tonnikala",1),
        kinkku : new Filling("Kinkku",1),
        kebab : new Filling("Kebab",1),
        sipuli : new Filling("Sipuli",1),
        tuplajuusto : new Filling("Tuplajuusto",1),
        gorgonzolajuusto : new Filling("Gorgonzola-juusto",1),
        persilija : new Filling("Persilija",1),
        pepperoni : new Filling("Pepperoni",1),
        valkosipulikastike : new Filling("Valkosipulikastike",1)
    }
    return fillings
}

function init_pizzas() {
    pizzas = [
        
        new Pizza(
            "Pekoni Grilli Pizza",
            "images/pekoni-grillipizza.jpg",
            10,
            1,
            [
                fillings.karamellisoitu_sipuli, 
                fillings.pekoni, 
                fillings.mozzarellajuusto, 
                fillings.bbq_kastike
            ]

        ),

        new Pizza(
            "Kana Pizza",
            "images/Kana-pizza.jpg",
            10,
            2,
            [
                fillings.kana, 
                fillings.tomaatti, 
                fillings.karamellisoitu_sipuli, 
                fillings.basilika,
                fillings.valkosipulikastike
            ],
        ),

        new Pizza(
            "Juusto Pizza",
            "images/juustopizza.webp",
            10,
            3,
            [
                fillings.mozzarellajuusto, 
                fillings.parmesaanijuusto, 
                fillings.valkosipulijuusto, 
            ],
        ),

    ]
    return pizzas
}

function open_ordering_overlay() {
    document.getElementById("overlay").style.display = "block"
}

function close_ordering_overlay() {
    document.getElementById("overlay").style.display = "none"
}

function countDuplicates(array, value) {
    var count = 0;
    for(var i = 0; i < array.length; ++i){
        if(array[i] == value) {
            count++;
        }
    }
    return count
}

function addItem(name) {
    var pizza = pizzas.filter(obj => {
        return obj.name === name
    })
    pizza = pizza[0]

    var orders = JSON.parse(localStorage.getItem("orders"))

    document.getElementById(`gluteeniton_${pizza.id}`).checked ? pizza.gluteeniton = true:"";
    document.getElementById(`valkosipuli_${pizza.id}`).checked ? pizza.valkosipuli = true:"";
    
    id_tag = document.createAttribute("id")
    id_tag.value = `pizza_${pizza.id}`

    const item = document.createElement("li")

    pizza.gluteeniton ? item.innerHTML = "Gluteeniton " : item.innerHTML = ""
    item.innerHTML += `${pizza.name} `
    pizza.valkosipuli ? item.innerHTML += "valkosipulilla " : ""
    item.innerHTML += `${pizza.price} €`

    const duplicates = countDuplicates(orders, item.innerHTML)
    if (duplicates !== 0) {
        orders.push(item.innerHTML)
        item.innerHTML = `x${duplicates} ` + item.innerHTML

    }else {
        orders.push(item.innerHTML)
    }
    
    localStorage.setItem("orders", JSON.stringify(orders))
    document.getElementById("shoppingcart").appendChild(item)
    localStorage
}