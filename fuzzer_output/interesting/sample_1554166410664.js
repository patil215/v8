function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [13.37,v1];
const v7 = [];
let v8 = v7;
let v11 = 0;
v7[2] = v5;
let v14 = 0;
const v15 = v14 + 1;
v14 = v15;
const v17 = [-1000000000.0];
const v19 = [1337,1337,1337,1337];
const v20 = v8.concat(v17,v19);
let v23 = 0;
const v27 = v23 + 1;
v23 = v27;
}
%NeverOptimizeFunction(main);
main();
