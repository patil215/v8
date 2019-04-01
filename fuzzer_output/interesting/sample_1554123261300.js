function main() {
const v2 = [13.37];
const v4 = [1337];
let v5 = arguments;
let v11 = "undefined";
const v12 = [13.37,13.37,13.37,13.37];
let v15 = 0;
while (v15 < 6) {
    const v16 = v4.unshift(v2,v5,6,v15);
    const v17 = v15 + 1;
    v15 = v17;
}
}
%NeverOptimizeFunction(main);
main();
