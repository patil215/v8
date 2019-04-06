function main() {
let v2 = 1337;
let v4 = 0;
v4 = 13.37;
const v7 = [13.37,13.37,13.37,13.37,13.37];
const v8 = [13.37,v7,Boolean];
const v10 = (2.220446049250313e-16).toFixed(v4,Boolean,v8,v2);
}
%NeverOptimizeFunction(main);
main();
