function main() {
let v1 = "undefined";
for (const v2 of v1) {
    const v3 = v2.__proto__;
}
}
%NeverOptimizeFunction(main);
main();
