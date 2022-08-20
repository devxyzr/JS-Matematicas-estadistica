const PlatziMath = {};

PlatziMath.esPar = function esPar(lista) {
  return !(lista.length % 2);
};
PlatziMath.esImpar = function esImpar(lista) {
  return lista.length % 2;
};

PlatziMath.calcularModa = function calcularModa(lista) {
  const listaCount = {};

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }

  const listaArray = Object.entries(listaCount);
  const listaOrdenada = ordenarListaBidimencional(listaArray, 1);
  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  //   console.log(listaCount, listaArray, listaOrdenada, listaOrdenadaMaxNumber);

  console.log("La moda es: " + listaMaxNumber[0]);

  const moda = listaMaxNumber[0];
  return moda;
};

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
  const lista = PlatziMath.ordenarLista(listaDesordenada);
  const listaEsPar = PlatziMath.esPar(lista);

  if (listaEsPar) {
    const indexMitad1ListaPar = lista.length / 2 - 1;
    const indexMitad2ListaPar = lista.length / 2;

    const listaMitades = [];

    listaMitades.push(lista[indexMitad1ListaPar]);
    listaMitades.push(lista[indexMitad2ListaPar]);

    const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexListaMitadImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexListaMitadImpar];
    console.log(indexListaMitadImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
};

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
  const sumaLista = lista.reduce((a, b) => a + b);

  const promedio = sumaLista / lista.length;
  console.log({ promedio });
  return promedio;
};

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    // if (valorAcumulado > nuevoValor) {
    //   return 1;
    // } else if (valorAcumulado == nuevoValor) {
    //   return 0;
    // } else if (valorAcumulado < nuevoValor) {
    //   return -1;
    // }
    return valorAcumulado - nuevoValor;
  }
  const lista = listaDesordenada.sort((a, b) => a - b);
  return lista;
};

PlatziMath.ordenarListaBidimencional = function ordenarListaBidimencional(
  listaDesordenada
) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[1] - nuevoValor[1];
  }
  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
};
