const inventos = [
    { nombre: "CD", lanzamiento: "1982-10-01" },
    { nombre: "Game Boy", lanzamiento: "1989-04-21" },
    { nombre: "World Wide Web", lanzamiento: "1991-08-06" },
    { nombre: "SMS", lanzamiento: "1992-12-03" },
    { nombre: "PlayStation 1", lanzamiento: "1994-12-03" },
    { nombre: "Windows 95", lanzamiento: "1995-08-24" },
    { nombre: "DVD", lanzamiento: "1996-11-01" },
    { nombre: "Google", lanzamiento: "1998-09-04" },
    { nombre: "Pendrive", lanzamiento: "2000-01-01" },
    { nombre: "PlayStation 2", lanzamiento: "2000-03-04" },
    { nombre: "Wikipedia", lanzamiento: "2001-01-15" },
    { nombre: "Facebook", lanzamiento: "2004-02-04" },
    { nombre: "YouTube", lanzamiento: "2005-02-14" },
    { nombre: "Twitter", lanzamiento: "2006-03-21" },
    { nombre: "iPhone", lanzamiento: "2007-06-29" },
    { nombre: "Android", lanzamiento: "2008-09-23" },
    { nombre: "WhatsApp", lanzamiento: "2009-01-01" },
    { nombre: "Instagram", lanzamiento: "2010-10-06" },
  ];
  


  document.addEventListener("DOMContentLoaded", () => {
    confirm("¿Quieres saber cuanto has vivido?")
    let fechaAct = new Date();
    let fechaInput = prompt("Ingresa tu edad en formato YYYY-MM-DD");
    let fechaNac = new Date(fechaInput);
    
    alert("Abre la consola para ver los resultados");

    const calcularEdad = () => {
        let edad = fechaAct - fechaNac;
        let minutos = Math.floor(edad / (1000 * 60));
        let horas = Math.floor(edad / (1000 * 60 * 60));
        let dias = Math.floor(edad / (1000 * 60 * 60 * 24));
        let meses = Math.floor(edad / (1000 * 60 * 60 * 24 * 30));

        let vivido = { min: minutos, hs: horas, dd: dias, mm: meses};
        return vivido;
    };

    const resultado = calcularEdad();
    console.log('A continuación mostraré tu edad de vida medida en meses, dias, horas y minutos:');
    console.log(`Has vivido meses: ${resultado.mm}`);
    console.log(`Has vivido dias: ${resultado.dd}`);
    console.log(`Has vivido horas: ${resultado.hs}`);
    console.log(`Has vivido minutos: ${resultado.min}`);

    const compararEdad = (fechaNac) => {

        for (let i=0; i < inventos.length; i++) {
            let fechaProducto = new Date(inventos[i].lanzamiento);
            
            if (fechaProducto - fechaNac < 0) {
                console.log("Naciste después que el "+ inventos[i].nombre);
            } else {
                console.log("Eres más antiguo que el "+ inventos[i].nombre);
            }
        }
    };  
    
    compararEdad(fechaNac);
});


