function main() {
const v4 = [1337,1337,1337];
const v5 = [v4,13.37,"number",Map];
const v8 = [-3176458122];
for (let v13 = 0; v13 != 100; v13++) {
    let v14 = v13;
    let v15 = v8;
    v15[v14] = v13;
    const v16 = v8.findIndex(BigInt,1337,-3176458122,v8);
}
}
%NeverOptimizeFunction(main);
main();
