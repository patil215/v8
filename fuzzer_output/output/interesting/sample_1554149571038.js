function main() {
let v1 = 0;
const v2 = v1 + 1;
v1 = v2;
const v5 = [13.37,13.37,13.37,13.37,13.37];
const v7 = [1337,1337,1337,1337,1337];
const v8 = [13.37,v5,Boolean];
const v10 = (2.220446049250313e-16).toFixed(v1,Boolean,v8,v7);
}
%NeverOptimizeFunction(main);
main();
