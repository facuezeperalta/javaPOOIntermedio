

const juan = {
    name: "Juanito",
    age:18,
    appovedCourses: ["Curso1"],
    addCourse(newCourse){
        this.appovedCourses.push(newCourse);
    }
}

juan.addCourse("Python inicial")

/* 
console.log( Object.keys(juan));
console.log( Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan)); */

console.log(Object.getOwnPropertyDescriptors(juan))

Object.defineProperty(juan,"prueba de la nasa",{
    value: "Ovnis",
    writable: true,
    enumerable: true,
    configurable: true
});