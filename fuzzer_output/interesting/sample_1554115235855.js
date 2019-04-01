function main() {
const v4 = [1337];
const v10 = [1337];
for (let v14 = 0; v14 < 100; v14++) {
    let v16 = undefined;
    let v18 = "undefined";
    v18 = v10;
    let v19 = v4;
    v19[v18] = v10;
    const v20 = v4.shift(Function,10,1337,v4);
}
}
%NeverOptimizeFunction(main);
main();
