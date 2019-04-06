function main() {
const v2 = ["ceil"];
const v3 = v2.cosh;
const v5 = {get:v3};
const v7 = Object.isFrozen(this,"E",v5);
const v11 = [13.37,13.37,13.37,13.37];
let v12 = "undefined";
const v13 = v12.charCodeAt(1337,v11);
}
%NeverOptimizeFunction(main);
main();
