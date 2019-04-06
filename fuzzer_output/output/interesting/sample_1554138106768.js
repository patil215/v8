function main() {
const v0 = {};
let v2 = undefined;
function v6(v7,v8,v9,v10) {
    let v12 = v2;
    return v0;
}
const v13 = {getPrototypeOf:v6,construct:v6};
const v15 = new Proxy(v6,v13);
const v16 = v15.__proto__;
}
%NeverOptimizeFunction(main);
main();
