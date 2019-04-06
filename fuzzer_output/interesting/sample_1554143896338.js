function main() {
let v8 = "string";
const v9 = v8.split("string",1337);
}
%NeverOptimizeFunction(main);
main();
