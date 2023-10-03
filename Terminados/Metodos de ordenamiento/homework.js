"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //                i
  //               p
  //  if([1]) => devuelvo el array
  // let pivote = Math.random() --->>> chequen que el valor del indice este dentro del array
  // recorrer el array i < pivote lo mando a la izq[] si i > pivote lo mando a la derecha[]
  //             [1]          [1]
  // quickSort(izq)   quickSort(der)
  // return el array ordenado

  //  [ 7 , 2 , 8 , 5 , 3 , 9 , 4 ]
  if (array.length <= 1) return array; // [1]

  let pivote = array[Math.floor(Math.random() * array.length)];

  let izq = [];
  let der = [];
  let equal = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivote) {
      izq.push(array[i]);
    } else if (array[i] > pivote) {
      der.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }

  return quickSort(izq).concat(equal).concat(quickSort(der));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora

  //  [ 7 , 2 , 8 , 5 , 3 , 9 , 4  ]

  // if( [1] ) => return array
  // dividir([])
  //  izq[]    |    der[]
  /// merge(  mergeSort(izq[]), mergeSort(der[]) )

  if (array.length <= 1) return array;

  let div = dividir(array); //[[izq], [der]]
  let izq = div[0]; // [izq]
  let der = div[1]; // [der]
  //                  []              []
  return merge(mergeSort(izq), mergeSort(der));
}

function dividir(array) {
  // parte a la mitad
  // devuelve izq y la derecha  // div [[izq],[der]] [1,2,3,4,5]
  let medio = Math.floor(array.length / 2); // indice medio
  let izq = array.slice(0, medio);
  let der = array.slice(medio);

  return [izq, der]; //[[123], [456]]
}

function merge(izq, der) {
  // compara ambos
  // izq[]  < o >  der[]
  //los concatena pero en orden
  //[ ordenado ]

  // OPCION A
  // let arrayOrdenado = [];
  // let indiceIzq = 0;
  // let indiceDer = 0;

  // while (indiceIzq < izq.length && indiceDer < der.length) {
  //   if (izq[indiceIzq] < der[indiceDer]) {
  //     arrayOrdenado.push(izq[indiceIzq]);
  //     indiceIzq++;
  //   } else {
  //     arrayOrdenado.push(der.indiceDer);
  //     indiceDer++;
  //   }
  // }

  // return arrayOrdenado
  //   .concat(izq.slice(indiceIzq))
  //   .concat(der.slice(indiceDer));

  // OPCION B

  let unidos = [];
  //          []         [1]
  while (izq.length && der.length) {
    if (izq[0] < der[0]) {
      unidos.push(izq.shift());
    } else {
      unidos.push(der.shift());
    }
  }

  while (izq.length) {
    unidos.push(izq.shift());
  }

  while (der.length) {
    unidos.push(der.shift());
  }

  return unidos;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
