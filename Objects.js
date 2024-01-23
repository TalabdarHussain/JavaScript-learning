// Object.create
// //singleton using constructor


// Object.literal
// multiple instances


//declare symbol

//  const mysym=Symbol("key")
//  console.log(typeof(mysym));

// // using key Symbol

// const real_obj={

//     name:"talabdar",
//     last_name:"hussain",
//     age:1,
//     "full name": "talabdar hussain",
//     [mysym]:"key",  //important use of key
//     greeting: function(){
//         console.log(`hello my hello ${this["full name"]}`); //always acces values of object using ["....this syntax "]
//     }

// }

// real_obj.invitation=function(){
//     console.log(`i want to invite you my dear friend ${this.name}`);
// }//also important

//use symbol in this code base
// console.log(real_obj["full name"]);
// console.log(real_obj["name"]);
// console.log((real_obj[mysym]));
// console.log(typeof real_obj.age);
// console.log(real_obj);


// +++Object.freeze+++
// real_obj["full name"]="Saqlain"
// Object.freeze(real_obj)
// real_obj["full name"]="hashim"
// console.log(real_obj);

// console.log(real_obj.greeting());
// console.log(real_obj.invitation());

// console.log(real_obj["full name"]);


my_obj={
    name:"talabdar",
    caste:"mangi"

}

my_obj2={
    name:"sobdar",
    caste:"mangi"
}


my_obj3={...my_obj,...my_obj2}
console.log(my_obj3);
console.log(Object.keys(my_obj3));


// ++destructuring in Object+++

const course={
    course_name:"javascript",
    intructor:"talabdar",
    course_fee:"100"
}

const {course_name:subject}=course
console.log(subject);