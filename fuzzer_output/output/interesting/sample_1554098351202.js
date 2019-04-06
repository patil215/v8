function main() {
const v3 = typeof "apply";
const v5 = v3 === "undefined";
const v6 = [v5,v3,13.37,65536];
for (const v7 in v6) {
}
const v8 = v3 <= 13.37;
let v11 = 0;
const v12 = v11 + 1;
v11 = v12;
}
%NeverOptimizeFunction(main);
main();
