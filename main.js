// Array 2D a Objeto
// creo un Array 2D
var food = [['name', 'banana'],['color', 'yellow'],['type','fruit']];

var students = [['name','Lucia'],['course','UX'],['edad', 30]];
//console.log(food);
//console.log(students);
// creo una variable vacía, lo que guarde aca será un objeto

// creo una función array to object
const arrayToObject = function (array2D) {
    var newObject = {};
// recorro el elemento donde le pasare el array
for(i = 0; i < array2D.length; i++){
    // de mi objeto quiero obtener el recorrido con el indice (i)
    // de llave quiero obtener el primer indice(0) y para el valor el segundo valor(1) del array pequeño
  newObject[array2D[i][0]] = array2D[i][1]; 
}
 // quiero retornar el nuevo objeto con los elementos que converti desde el array
  return newObject; 
}

console.log(arrayToObject(students));
console.log(arrayToObject(food));

// object to array 2D
// creo un objeto
var perro = {
  raza: "poodle",
  color: "blanco",
  nombre: "Bond"
}

console.log(perro);

// Métodos
// metodo para obtener las llaves del objeto en array
var newArray = Object.keys(perro);
// método para obtener los valores del objeto en array
var newArray2 = Object.values(perro);
// método para obtener todo el objeto en array
var newArray3 = Object.entries(perro);

console.log(newArray);
console.log(newArray2);
console.log(newArray3);

// función para convertir de objeto en array 
var objectToArray = function (objeto){
  // creo una variable vacia que retornara un array
  var array2D = [];
  // otra forma var newArray2D = Object.keys(objeto);
  var newArray2D = Object.entries(objeto);
  for (i = 0; i < newArray2D.length; i++){
    // le empujo (push) los valores a la variable vacia
    array2D.push([newArray2D[i]])
    // otra forma array2D.push([newArray2D[i], objeto[newArray2D[i]]])
  }
  return array2D;
}

console.log(objectToArray(perro));

var random = {
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
}
var other = {
  name: 'Sam',
  age: 25,
  hasPets: true
}
// obtener todas las llaves de un objeto
function getAllKeys(obj) {
 var arrayKeysObject = [];
 var newArray = Object.keys(obj);
  for(i = 0; i< newArray.length; i++){
  arrayKeysObject.push(newArray[i])
  }
  return arrayKeysObject;
}

console.log(getAllKeys(random));
console.log(getAllKeys(other));

