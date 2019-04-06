function main() {
const v1 = [13.37,13.37,13.37];
const v3 = v1.__proto__;
v3[1337] = 13.37;
const v6 = [1337];
for (let v11 = 0; v11 != 100; v11++) {
    let v12 = v6;
    v12[100] = v11;
    const v14 = [13.37,13.37,13.37,13.37];
    const v16 = gc(v14);
    const v17 = v6.shift(Function,1337,-3176458122,v6);
}
}
%NeverOptimizeFunction(main);
main();
