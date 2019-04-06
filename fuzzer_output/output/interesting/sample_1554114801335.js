function main() {
const v3 = [1337,1337];
const v4 = {charAt:13.37,isFinite:1337,b:Map,toPrimitive:v3};
const v6 = [13.37,13.37,13.37,13.37];
const v7 = [];
let v10 = 0;
const v11 = v10 + 1;
v10 = v11;
v6.__proto__ = v7;
const v13 = {set:Function};
const v15 = Object.defineProperty(v7,v4,v13);
}
%NeverOptimizeFunction(main);
main();
