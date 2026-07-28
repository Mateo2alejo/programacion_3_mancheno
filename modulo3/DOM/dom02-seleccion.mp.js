document.addEventListener("DOMContentLoaded", function(){
    const titulo = document.getElementById("titulo");
    console.log("Título:", titulo);

    const notas = document.getElementsByClassName("nota");
    console.log("Notas:", notas);

    const items = document.getElementsByTagName("li");
    console.log("Items de vuelos:", items);

    const primerItem = document.querySelector(".item");
    console.log("Primer vuelo:", primerItem);

    const todosLosItems = document.querySelectorAll(".item");
    console.log("Todos los vuelos (NodeList):", todosLosItems);

    Array.from(todosLosItems).forEach(element => {
        console.log("Vuelo individual:", element.textContent);
    });
});