function main() {
const v2 = arguments.__proto__;
let v5 = 0;
do {
    const v6 = v2.__proto__;
    const v7 = v5 + 1;
    v5 = v7;
} while (v5 < 4);
const v8 = typeof 13.37;
const v10 = v8 === "number";
}
%NeverOptimizeFunction(main);
main();
