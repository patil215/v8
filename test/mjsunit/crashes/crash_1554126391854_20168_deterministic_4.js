// Flags: --allow-natives-syntax

function main() {
const v4 = [13.37,13.37,"undefined",13.37,13.37];
const v6 = [1337,1337,1337,1337];
const v7 = [];
const v8 = {revocable:13.37,tanh:1337,pop:1337,defineProperty:v7,length:1337,match:v4,join:13.37,codePointAt:v4,fromCodePoint:Object};
const v9 = {sign:-807276576,defineProperty:v6,MIN_SAFE_INTEGER:13.37,isSealed:v8,parseInt:v6,indexOf:Object,bind:Object,substring:Object,revocable:-807276576};
function v10(v11,v12,v13,v14) {
    let v15 = v9;
    for (const v16 in v15) {
        const v17 = [v8];
        let v18 = v17;
        const v19 = v18.indexOf();
        v19[-536870912] = v18;
        for (let v23 = 0; v23 < 100; v23++) {
        }
    }
}
const v24 = v10();
}
%NeverOptimizeFunction(main);
main();
