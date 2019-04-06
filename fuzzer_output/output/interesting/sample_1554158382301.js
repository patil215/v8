function main() {
const v2 = [13.37,13.37,13.37,13.37];
const v4 = new Proxy(Proxy,v2,1337);
const v5 = (13.37)[13.37];
const v7 = Symbol.iterator;
v4[v7] = v5;
const v11 = new Float64Array(51066);
let v13 = "cos";
let v15 = 2147483647;
const v16 = v15 > v13;
let v17 = 1337;
let v18 = v17;
const v19 = {isConcatSpreadable:v17,...v11,...v18,...v13,...v16};
}
%NeverOptimizeFunction(main);
main();
