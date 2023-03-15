document.addEventListener("DOMContentLoaded", main);
class Filling{
    constructor(name,price){
        this.name = name
        this.price = price
    }
}
class Pizza{
    constructor(name, image, price, fillings,gluteeniton=false,valkosipuli=false){
        this.name = name
        this.image = image
        this.price = price
        this.fillings = fillings
        this.gluteeniton = gluteeniton
        this.valkosipuli = valkosipuli

    }
}

function main() {

    fillings = init_fillings()

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
        sipuli : new Filling("Sipuli",),
        tuplajuusto : new Filling("Tuplajuusto",),
        gorgonzolajuusto : new Filling("Gorgonzola-juusto",1),
        persilija : new Filling("Persilija",),
        pepperoni : new Filling("Pepperoni",1),
    }
    return fillings
    }

function open_ordering_overlay() {
    document.getElementById("overlay").style.display = "block"
}

function close_ordering_overlay() {
    document.getElementById("overlay").style.display = "none"
}

function addItem(name) {
    const item = document.createElement("li")
    item.innerHTML = name
    document.getElementById("shoppingcart").appendChild(item)
}