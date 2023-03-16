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

fillings = init_fillings()
pizzas = init_pizzas()

function main() {


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
        tuplajuusto : new Filling("Tuplajuusto",1),
        gorgonzolajuusto : new Filling("Gorgonzola-juusto",1),
        persilija : new Filling("Persilija",1),
        pepperoni : new Filling("Pepperoni",1),
        valkosipulikastike : new Filling("Valkosipulikastike",1),
        paprika : new Filling("Paprika",1),
        sieni : new Filling("Sieni",1),
        kebabkastike : new Filling("Kebabkastike",0),
        sianlihaaviipaleita : new Filling("Sianlihaaviipaleita",1),
        ananas : new Filling("Ananas",0),
        korppujauho : new Filling("Korppujauho",0),
        katkarapu : new Filling("Katkarapu",1),
        mustapippuri : new Filling("Mustapippuri",0)

    }
    return fillings
}

function init_pizzas() {
    pizzas = {
        pekonigrillipizza : new Pizza(
            "Pekoni Grilli Pizza",
            "images/pekoni-grillipizza.jpg",
            10,
            [
                fillings.karamellisoitu_sipuli, 
                fillings.pekoni, 
                fillings.mozzarellajuusto, 
                fillings.bbq_kastike
            ]

        ),

        kanapizza : new Pizza(
            "Kana Pizza",
            "images/Kana-pizza.jpg",
            10,
            [
                fillings.kana, 
                fillings.tomaatti, 
                fillings.karamellisoitu_sipuli, 
                fillings.basilika,
                fillings.valkosipulikastike
            ],
        ),

        juustopizza : new Pizza(
            "Juusto Pizza",
            "images/juustopizza.webp",
            10,
            [
                fillings.mozzarellajuusto, 
                fillings.parmesaanijuusto, 
                fillings.valkosipulijuusto, 
            ],
        ),

        kreikkalainenpizza : new Pizza(
            "Kreikkalainen Pizza",
            "images/Kreikkalainen-pizza.jpg",
            10,
            [
                fillings.mozzarellajuusto, 
                fillings.sipuli, 
                fillings.tomaatti,
                fillings.oliivi,
                fillings.pekoni,
                fillings.paprika,
                fillings.sieni,
            ],
        ),
        
        margheritapizza : new Pizza(
            "Margherita Pizza",
            "images/margarita-pizza.jpg",
            10,
            [
                fillings.mozzarellajuusto, 
                fillings.oregano, 
                fillings.basilika,
                fillings.tomaatti, 
            ],
        ),

        operapizza : new Pizza(
            "Opera Pizza",
            "images/Opera-pizza.jpg",
            10,
            [
                fillings.oliivi, 
                fillings.rucola, 
                fillings.sieni,
                fillings.tonnikala, 
                fillings.kinkku,
            ],
        ),

        kebabpizza : new Pizza(
            "Kebab Pizza",
            "images/Kebab-pizza.jpg",
            10,
            [
                fillings.kebab, 
                fillings.sipuli, 
                fillings.tomaatti,
                fillings.tuplajuusto, 
                fillings.kebabkastike,
            ],
        ),

        italialainenpizza : new Pizza(
            "Italialainen Pizza",
            "images/Italialainen-pizza.jpg",
            10,
            [
                fillings.mozzarellajuusto, 
                fillings.rucola, 
                fillings.tomaatti,
            ],
        ),

        gorgonzolapizza : new Pizza(
            "Gorgonzola Pizza",
            "images/Gorgonzola-pizza.jpg",
            10,
            [
                fillings.gorgonzolajuusto, 
                fillings.sipuli, 
                fillings.persilija,
            ],
        ),

        tropicanapizza : new Pizza(
            "Tropicana Pizza",
            "images/Tropicana-pizza.jpg",
            10,
            [
                fillings.mozzarellajuusto, 
                fillings.sianlihaaviipaleita, 
                fillings.ananas,
            ],
        ),

        katkarapuparmesaanipizza : new Pizza(
            "Katkarapu Parmesaani Pizza",
            "images/katkarapu-ja-parmesaanipizzaa.jpg",
            10,
            [
                fillings.mozzarellajuusto, 
                fillings.katkarapu, 
                fillings.parmesaanijuusto,
                fillings.korppujauho
            ],
        ),

        pepperonipizza : new Pizza(
            "Pepperoni Pizza",
            "images/pepperoni-pizza.jpg",
            10,
            [
                fillings.mozzarellajuusto, 
                fillings.pepperoni, 
                fillings.mustapippuri,
            ],
        ),
    }
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