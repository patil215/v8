function main() {
const v1 = [13.37];
let v6 = 0;
const v7 = v6 == 1337;
let v8 = 13.37;
const v9 = v6 + 1;
v6 = v9;
const v12 = [1337,1337,1337];
const v13 = {pop:1337,atanh:v1,setInt8:13.37,fromCodePoint:v12};
const v17 = Object.defineProperty(Function,"min",v13);
}
%NeverOptimizeFunction(main);
main();
