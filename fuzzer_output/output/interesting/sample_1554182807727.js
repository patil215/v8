function main() {
let v1 = 13.37;
const v3 = [13.37,13.37];
function v4(v5,v6,v7,v8) {
}
function v15(v16,v17,v18,v19) {
}
const v21 = new Proxy(v3,v4);
const v23 = {set:v15};
const v25 = Object.defineProperty(v21,-9007199254740993,v23);
for (const v26 in v21) {
}
const v27 = -9007199254740993 < v1;
}
%NeverOptimizeFunction(main);
main();
