let main_form = document.getElementById("formulario")
let input_nom = document.getElementById("nombre");
let input_edad = document.getElementById("edad");
let input_codigo_postal = document.getElementById("codigo_postal");
main_form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Waiiit");
    if(isNaN(input_nom.value)){
        console.log("Nombre válido");
    }
    else{
        console.log("Nombre inválido, ingresaste números.");
    }
    if(!isNaN(input_edad.value)){
        console.log("Edad válida");
    }
    else{
        console.log("Edad inválida.");
    }
    if (input_codigo_postal.value.length == 5){
        console.log("Código postal válido");
    }
    else{
        console.log("Código postal inválido");
    }
    let input_genero = document.querySelector("input[name='genero']:checked");
    let generos = ["Masculino", "Femenino", "Otro"];
    console.log("El género selecionado es: " + input_genero.value);
    if(generos.indexOf(input_genero.value) != -1){
        console.log("Género válido");
    }
    else{
        console.log("Género inválido");
    }
    let input_intereses = document.querySelectorAll("input[name='intereses']:checked");
    let intereses = ["Tecnologia", "Deportes", "Musica", "Arte"];
    let todos_validos = true;
    for (let i = 0; i < input_intereses.length; i++) {
        let valor = input_intereses[i].value;
        if (intereses.indexOf(valor) === -1) {
            todos_validos = false;
        }
    }
    if (todos_validos) {
        console.log("Intereses válidos.");
    } else {
        console.log("Uno o más intereses son inválidos.");
    }
    let input_pais = document.querySelector("select[name='pais']");
    let pais = ["Mexico", "Colombia", "Argentina", "Chile", "Peru", "Venezuela", "España", "Otros"];
    console.log("País seleccionado: " + input_pais.value);
    if(pais.indexOf(input_pais.value) != -1){
        console.log("País válido");
    }
    else{
        console.log("País inválido");
    }
})
