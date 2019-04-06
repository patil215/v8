function main() {
function v2(v3,v4,v5,v6) {
    let v8 = 13.37;
    const v11 = new BigUint64Array(1337,BigUint64Array,v8,v8,0);
    for (const v12 of v11) {
        let v13 = v8;
        const v14 = v12 > v13;
    }
}
const v16 = {construct:v2,defineProperty:v2,get:v2,set:v2,apply:v2,call:v2,ownKeys:v2,preventExtension:v2};
const v18 = new Proxy(Function,v16);
let v21 = 0;
const v22 = v18(13.37,"undefined");
const v23 = v21 + 1;
v21 = v23;
}
%NeverOptimizeFunction(main);
main();
