function main() {
const v1 = [13.37,13.37,13.37,13.37];
let v2 = v1;
const v4 = [1337,1337,1337,1337,1337];
const v6 = new Uint16Array(v4);
const v9 = 0 >= v2;
const v10 = v6[0];
}
%NeverOptimizeFunction(main);
main();
