function main() {
let v2 = 16;
const v3 = v2 + 1;
v2 = v3;
const v6 = [13.37,13.37,13.37,13.37,13.37];
const v8 = [1337,1337,1337,1337,1337];
const v9 = [13.37,v6,Boolean];
const v11 = (2.220446049250313e-16).toFixed(v2,Boolean,v9,v8);
}
%NeverOptimizeFunction(main);
main();
