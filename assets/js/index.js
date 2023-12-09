//declaracion de variable precio con un valor inicial
let precio = 400000

// declaracion de constante y asignacion para el precio inicial
const precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio

// declaracion de constante y variable para la cantidad
const Qty = document.querySelector(".cantidad")
let qtyValue = parseInt(Qty.innerHTML)

// declaracion de constante y variable para el valor total
const totalValue = document.querySelector(".valor-total")
totalValue.innerHTML = 0

// declaracion de constantes para el color de fondo y seleccion de color
const prodColor = document.querySelector(".card")
const Color = ["#7ba238","#333FFF","#515266"]
let selectColor = 1

// funcion que permite incrementar la cantidad
function addQty() {
    qtyValue += 1
    Qty.innerHTML = qtyValue
    totalValue.innerHTML = precio * qtyValue
}

// funcion que permite decrementar la cantidad
function lessQty() {
    if (qtyValue != 0) {
        qtyValue -= 1
    }
    Qty.innerHTML = qtyValue
    totalValue.innerHTML = precio * qtyValue
}

// funcion: permite cambiar color de background de la card, se utiliza al hacer click en la imagen
function chgColor() {
    prodColor.style.background = Color[selectColor]
    selectColor = selectColor + 1
    if (selectColor == 3) {
        selectColor = 0
    }
}