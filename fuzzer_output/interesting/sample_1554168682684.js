function main() {
const v1 = [13.37,13.37,13.37];
const v3 = v1.__proto__;
v3[1337] = 13.37;
const v6 = [1337];
for (let v11 = 0; v11 != 100; v11++) {
    let v12 = v11;
    let v13 = v6;
    v13[v12] = v11;
    const v15 = [13.37,13.37,13.37,13.37];
    const v17 = gc(v15);
    const v18 = v6.shift(Function,1337,-3176458122,v6);
}
}
%NeverOptimizeFunction(main);
main();
