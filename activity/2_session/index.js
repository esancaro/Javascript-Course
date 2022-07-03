// Ejercicio 1
let person = {
  name: "Esteban",
  age: 47,
  profession: "Developer Wannabe",
};

console.log(Object.keys(person));

// Ejercicio 2
//2.1
console.log(this);

//2.2a this en función 
function fFoo() {
  return this;
}
console.log(fFoo());

//2.2b this modo strict
function fFooStrict() {
  "use strict";
  return this;
}
console.log(fFooStrict());

// 2.3 this en un método: function y arrow
let fooObj = {
  foo: "lorem ipsum",
  bar: function(){
    console.log(`2.3. This foo: ${this.foo}`);
  },
  baz: () => {
    console.log(`2.3b. This is foo: ${this.foo}`)
  },
  qux: () => {
    let foo = "dolor sit amet"; // esto lo entendí mal
    console.log(`2.3b-1. This is foo: ${this.foo}`)
    console.log(`2.3b-1b. This is foo: ${this}. This is pointing to window.`)
  },
  ctrlF: function(){
    console.log(`Function this: ${this}`);
  },
  ctrlA: () => {
    console.log(`Arrow this: ${this}`);
  }
}
fooObj.bar();
fooObj.baz();
fooObj.qux();

document.getElementById("ej2-bf").addEventListener("click", fooObj.ctrlF);
document.getElementById("ej2-ba").addEventListener("click", fooObj.ctrlA);

function fooBind(){
  console.log(`Bind Test: ${this.foo}. This is ${this}`);
}

funcBind = fooBind.bind(fooObj);
funcBind();

function fooBindWParams(param1, param2){
  console.log(`Bind Test: ${this.foo}. This is ${this}. param1: ${param1}, param2: ${param2}`);
}

fooBindWParams.call(fooObj, 'param one', 'param two');
fooBindWParams.apply(fooObj, ['Array 1', 'Array 2'])

// Ejercicio 3
import('./invertir_cadena.js').then(
  fullfilled => console.log('Ejercicio 3 👍🏻')
  ).catch(rejected => console.log(rejected));
  
  // Ejercicio 4
import('./ejercicio_4.js')
.then(() => {
    console.log('Ejercicio 4 👍🏻')
})
.catch(
  rejected => console.log(rejected)
);

// Ejercicio 5

// Ejercicio 6

let loginWitUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        resolve("User logged in");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 200);
  });
};

document.getElementById("loginSuccessAsync").addEventListener("click", () => loginWitUsername("admin", "passwd")
.then((resolve) => {alert(resolve)})
.catch((rejected) => {alert(rejected)})
);
document.getElementById("loginFailureAsync").addEventListener("click", () => loginWitUsername("esteban", "n/a")
.then((resolve) => {alert(resolve)})
.catch((rejected) => {alert(rejected)})
);
