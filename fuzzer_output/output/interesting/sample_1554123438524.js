function main() {
let v8 = undefined;
let v11 = 0;
const v12 = v11 + 1;
const v17 = parseInt(1337,2147483649,"undefined");
v11 = v12;
}
%NeverOptimizeFunction(main);
main();
