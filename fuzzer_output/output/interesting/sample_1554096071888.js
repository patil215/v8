function main() {
const v4 = [13.37,13.37,13.37,13.37];
let v7 = 0;
const v8 = v7 + 1;
v7 = v8;
const v10 = v4.__proto__;
const v19 = [7,...v10];
}
%NeverOptimizeFunction(main);
main();
