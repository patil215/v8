function main() {
const v1 = [1337,1337,1337];
const v3 = [13.37,13.37,13.37];
const v4 = v3.__proto__;
v4[1337] = v1;
const v7 = [v3];
for (let v12 = 0; v12 != 100; v12++) {
    let v13 = v7;
    v13[100] = v12;
    const v15 = [13.37,13.37,13.37,13.37];
    const v17 = gc(v15);
    const v18 = v7.shift(Function,1337,-3176458122,v7);
}
}
%NeverOptimizeFunction(main);
main();
