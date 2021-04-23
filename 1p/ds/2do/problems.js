//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// may use code from previous exercises
//
// DS in JS

//1. object
//   attach(n)
// -> n random integer
// <- random name added
 
class Object{
    constructor(){
            this.datos={};
    }
    attach(n){
           this.datos[n]=n;
    }
    print(){
            console.log(this.datos);
    }
}



//2. set
//   attach(n)//wrap the method 'add'
// -> n random integer
// <- 

class Set{
    constructor(){
        this.datos=new Set();
    }
    attach(n){
        this.datos.add(n);
    }
    print(){
        this.datos.forEach((val)=>console.log(val))
    }
}




//3. map
//   attach(n)//wrap the method 'set'
// -> n random integer
// <- 

class Map{
    constructor(){
        this.datos=new Map();
    }
    attach(n){
        this.datos.set(n,n);
    }
    print(){
        this.datos.forEach( (value,key)=>console.log(value,'  ',key));
    }
}




