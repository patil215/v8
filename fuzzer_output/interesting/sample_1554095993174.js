function main() {
const v2 = "undefined" != 1337;
for (let v6 = 0; v6 < 6; v6++) {
    const v8 = [1337];
    const v9 = {exec:v8};
    const v11 = [13.37];
    v9.all = v11;
}
let v14 = 0;
const v18 = v14 + 1;
v14 = v18;
}
%NeverOptimizeFunction(main);
main();
