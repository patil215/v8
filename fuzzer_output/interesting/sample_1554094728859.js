function main() {
let v2 = 0;
while (v2 < 3) {
    let v5 = 0;
    const v6 = v5 + 1;
    v5 = v6;
    const v8 = Error.__proto__;
    const v12 = [13.37];
    const v14 = [1337];
    const v15 = {setUint32:v12,tan:Error,flatMap:4294967297,getUint16:v14,getPrototypeOf:1337,add:v12};
    v15.__proto__ = v8;
    const v16 = v2 + 1;
    v2 = v16;
}
}
%NeverOptimizeFunction(main);
main();
