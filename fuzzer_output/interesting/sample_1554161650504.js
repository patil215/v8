function main() {
let v2 = 0;
function v5(v6,v7,v8,v9) {
    let v11 = 13.37;
    const v14 = new BigUint64Array(1337,BigUint64Array,v11,v11,0);
    for (const v15 of v14) {
        let v16 = v15;
        const v17 = v15 > v16;
    }
}
const v19 = {construct:v5,defineProperty:v5,get:v5,set:v5,apply:v5,call:v5,ownKeys:v5,preventExtension:v5};
const v21 = new Proxy(Function,v19);
const v22 = v21(13.37,"undefined");
}
%NeverOptimizeFunction(main);
main();
