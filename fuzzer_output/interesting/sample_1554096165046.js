function main() {
const v3 = 1337 << "undefined";
let v7 = 0;
const v8 = v7 + 1;
v7 = v8;
const v9 = [v3,Function,ArrayBuffer,v3];
}
%NeverOptimizeFunction(main);
main();
