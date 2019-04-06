function main() {
const v3 = [13.37,13.37,-1742085838];
const v5 = [1337,1337,1337,1337];
const v6 = [v5,v5,13.37];
const v7 = {getOwnPropertyNames:v6,includes:v3,log1p:v5,NaN:v6,tanh:"number",leftContext:v6};
const v11 = new Uint16Array(v5,2);
const v12 = v11.indexOf(4.0,v3,v7);
}
%NeverOptimizeFunction(main);
main();
