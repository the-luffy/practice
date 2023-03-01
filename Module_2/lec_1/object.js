// it is non primitive datatype that is used to represent anything
// empty object creation
// collection of key : value pair
// key: string or number & value : any valid js datatype
let cap = {
    firstName: "steve",
    "last Name": "Rogers",
    friends: ["Tony","peter","bruce"],
    address: {
        city: "manhattan",
        stste: "NewYork"
    },
    age: 34,
    isAvenger: true
}
// print 
console.log(cap);
// get a key value
console.log(cap.firstName);
console.log(cap.age);
console.log(cap.address.city);
console.log(cap.friends[1]);

// get
let varName = "firstName";
console.log(cap[varName]);
varName="last Name";
console.log(cap[varName]);
console.log(cap["last Name"]);
