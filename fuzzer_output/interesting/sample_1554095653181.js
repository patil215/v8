function main() {
let v1 = "undefined";
const v3 = [13.37,13.37,13.37,13.37];
let v4 = v1;
const v5 = v4 + 1;
let v7 = 0;
for (const v8 in v3) {
    const v10 = [1337];
    const v11 = [v10];
    const v12 = {};
    const v14 = new Proxy(v11,v12);
    v14.fill = Function;
    let v18 = 0;
}
}
%NeverOptimizeFunction(main);
main();
