function main() {
const v2 = ["log1p"];
let v3 = v2;
function v4(v5,v6,v7,v8) {
    const v10 = [13.37,13.37];
    const v12 = {ceil:13.37,is:v10,raw:1337};
    const v16 = [1337];
    v16[1337] = "undefined";
    for (let v21 = 0; v21 < 100; v21++) {
        const v23 = v16.push(undefined,v12,9007199254740991);
    }
}
const v25 = v4(v3,v2,100,13.37);
const v26 = v4("log1p",v3);
}
%NeverOptimizeFunction(main);
main();
