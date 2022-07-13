// Ejercicio 1
console.log("%cEjercicio 1", "color: green; font-size: 20px");
const personFunc = (persona) => {
    return Object.values(persona);
};
console.log(personFunc({ name: "Esteban", age: 47, profession: "Dev" }));
// Ejercicio 2
console.log("%cEjercicio 2", "color: green; font-size: 20px");
function sumOrConcatenate(param1, param2) {
    // number + number
    if (typeof param1 === "number" && typeof param2 === "number")
        return param1 + param2; // number:string || string:number
    if ((typeof param1 === "number" && typeof param2 === "string") ||
        (typeof param1 === "string" && typeof param2 === "number"))
        return `${param1}:${param2}`; // string-string
    return `${param1}-${param2}`;
}
console.log(sumOrConcatenate(4, 3)); // 7
console.log(sumOrConcatenate(4, "hello")); // 4:hello
console.log(sumOrConcatenate("hello", 3)); // hello:7
console.log(sumOrConcatenate("hello", "world")); //hello-world
// Ejercicio 3
console.log("%cEjercicio 3", "color: green; font-size: 20px");
// type predicate
const isCar = (vehicle) => {
    return vehicle.pressPedal != undefined;
};
const vehicleFunc = (vehicle) => {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    }
    else {
        vehicle.openThrottle();
    }
};
vehicleFunc(
// Car
{
    tires: 4,
    turnOnEngine: () => {
        console.log("car turning on engine");
    },
    pressPedal: () => {
        console.log("car pressing pedal");
    },
});
vehicleFunc(
// Motorcycle
{
    tires: 2,
    turnOnEngine: () => {
        console.log("Motorcycle turning on engine");
    },
    openThrottle: () => {
        console.log("Motorcycle pressing pedal");
    },
});
// Ejercicio 4
console.log("%cEjercicio 4", "color: green; font-size: 20px");
const arrayRemoveFirstElm = (x) => {
    x.shift();
    return x;
};
console.log(arrayRemoveFirstElm([1, 2, 3]));
console.log(arrayRemoveFirstElm([1, 2, 3, "4"]));
console.log(arrayRemoveFirstElm(["1", "2", "3", "4"]));
// console.log(arrayRemoveFirstElm([1, {name: 'Esteban', surname: 'Castro'}, 3, '4']));
