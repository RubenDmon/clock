const navbar = document.querySelector(".navbar");
const icono=document.querySelector(".navbar button i");
const relog=document.querySelector(".container h2");
const fecha=document.querySelector(".container h3");

const body=document.querySelector("body");


const themeChanger = document.querySelector("#themeChanger")
themeChanger.addEventListener("click", () => {
  navbar.classList.toggle("dark-theme");
  body.classList.toggle("dark-theme");

  if(parseInt(icono.getAttribute("data-c"))===0){
    icono.setAttribute("class","fa-regular fa-sun");
    icono.setAttribute("data-c","1");
  }else{
    icono.setAttribute("class","fa-regular fa-moon");
    icono.setAttribute("data-c","0");
  }
  
})


const reloj = setInterval(() => {
let fechaActual = new Date();
let hora = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();
relog.textContent=`Hour: ${hora} : ${minutos} : ${segundos}`

// Obtener el día actual (domingo = 0, lunes = 1, ..., sábado = 6)
let dia = fechaActual.getDay();
// Array con los nombres de los días de la semana
let nombresDias = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Obtener el nombre del día actual
let nombreDia = nombresDias[dia];

// Obtener el día del mes actual
let diaMes = fechaActual.getDate();

// Obtener el mes actual (enero = 0, febrero = 1, ..., diciembre = 11)
let mes = fechaActual.getMonth();

// Array con los nombres de los meses
let nombresMeses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Obtener el nombre del mes actual
let nombreMes = nombresMeses[mes];

// Obtener el año actual
let año = fechaActual.getFullYear();

// Imprimir la fecha actual en la consola

fecha.textContent=`Date: ${nombreDia} , ${diaMes}   ${nombreMes}, ${año}`
  }, 1000)