function main() {
const v1 = {hasOwnProperty:1337};
const v3 = v1.__proto__;
v3[1337] = 13.37;
const v7 = {};
let v9 = undefined;
const v12 = [v7];
for (let v17 = 0; v17 != 100; v17++) {
    let v18 = v17;
    let v19 = v12;
    v19[v18] = v17;
    const v21 = [13.37,13.37,13.37,13.37];
    const v23 = gc(v21);
    const v24 = v12.shift(Function,1337,-3176458122,v12);
}
const v26 = [13.37];
}
%NeverOptimizeFunction(main);
main();
