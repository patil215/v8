function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [v1];
const v5 = v3 + 1337;
const v8 = v5.toLocaleUpperCase(10,10,v3,13.37,0);
let v11 = 0;
const v18 = v11 + 1;
v11 = v18;
}
%NeverOptimizeFunction(main);
main();
