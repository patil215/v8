function main() {
let v2 = 0;
const v4 = [1337];
const v5 = [v4];
const v9 = [13.37,13.37,2741319795];
let v12 = 0;
const v13 = v12 + 1;
v12 = v13;
const v15 = [1337,1337,1337,1337];
const v16 = [v15,v15,13.37];
const v17 = {lastParen:v16,includes:v9,log1p:v15,NaN:v16,tanh:"number",leftContext:v16};
v5.__proto__ = v17;
const v20 = new Uint16Array(v5,2);
}
%NeverOptimizeFunction(main);
main();
