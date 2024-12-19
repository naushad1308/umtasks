function Person(name) {
    this.name = name
    this.setName = function (newName) {
        this.name = newName
    }

}

Person.prototype.getName = function () {
    return this.name
}


let p1 = new Person("John")
p1.setName("sumit")
console.log(p1.getName())
