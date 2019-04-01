function main() {
const v3 = [13.37];
const v5 = [1337,1337];
const v6 = [v3,"*rBqVy//Sg",1337,"*rBqVy//Sg"];
const v7 = {preventExtension:v5,deleteProperty:"*rBqVy//Sg",has:v3,getPrototypeOf:v6,defineProperty:v3,call:v5,isExtensible:"*rBqVy//Sg",set:"*rBqVy//Sg",ownKeys:1337,setPrototypeOf:v6,construct:8,apply:1337};
const v9 = new Proxy(v3,v7);
v7.__proto__ = v9;
}
%NeverOptimizeFunction(main);
main();
