function main() {
let v4 = Boolean;
const v5 = v4.__lookupSetter__("__proto__",13.37,13.37,1337);
}
%NeverOptimizeFunction(main);
main();
