function esPar(lista) {
  return !(lista.length % 2);
}
function esImpar(lista) {
  return lista.length % 2;
}

function calcularMediana(lista) {
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    const indexMitad1ListaPar = lista.length / 2 - 1;
    const indexMitad2ListaPar = lista.length / 2;
    const listaMitades = [
      lista[indexMitad1ListaPar],
      lista[indexMitad2ListaPar],
    ];
    const medianaListaPar = calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexListaMitadImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexListaMitadImpar];
    console.log(indexListaMitadImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
}

function calcularPromedio(lista) {
  const sumaLista = lista.reduce((a, b) => a + b);

  const promedio = sumaLista / lista.length;
  console.log({ promedio });
  return promedio;
}
