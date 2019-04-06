function main() {
const v1 = {EPSILON:Promise};
let v5 = 0;
const v6 = Promise.reject(-0.0,v1);
const v7 = v5 + 1;
v5 = v7;
}
%NeverOptimizeFunction(main);
main();
