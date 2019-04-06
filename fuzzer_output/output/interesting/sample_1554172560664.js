function main() {
let v3 = 0;
let v4 = 13.37;
let v5 = v4;
const v7 = [-1000000.0,-1000000.0,-1000000.0];
const v10 = [v7];
const v12 = [];
v12[2] = v5;
const v13 = v12.includes(-1000000.0,v10,1337,-4294967295);
}
%NeverOptimizeFunction(main);
main();
