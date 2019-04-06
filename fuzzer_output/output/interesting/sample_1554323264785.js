function main() {
let v8 = undefined;
const v13 = [13.37,13.37,-1742085838];
const v15 = [1337,1337,1337,1337];
const v16 = [v15,v15,13.37];
const v17 = {getOwnPropertyNames:v16,includes:v13,log1p:v15,NaN:v16,tanh:"number",leftContext:v16};
const v20 = new Uint16Array(v15,-2);
const v21 = v20.indexOf(4.0,13.37,v17);
}
%NeverOptimizeFunction(main);
main();
