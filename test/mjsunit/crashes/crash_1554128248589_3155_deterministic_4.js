// Flags: --allow-natives-syntax

function main() {
const v0 = {};
const v5 = [13.37,13.37,"undefined",13.37,13.37];
const v7 = [1337,1337,1337,1337];
const v8 = [];
const v9 = {revocable:13.37,tanh:1337,pop:1337,defineProperty:v8,length:1337,match:v5,join:13.37,codePointAt:v5,fromCodePoint:Object};
const v10 = {sign:-807276576,defineProperty:v7,MIN_SAFE_INTEGER:13.37,isSealed:v9,parseInt:v7,indexOf:Object,bind:Object,substring:Object,revocable:-807276576};
function v11(v12,v13,v14,v15) {
    let v16 = v10;
    for (const v17 in v16) {
        const v18 = [v9];
        let v19 = v18;
        const v20 = v19.indexOf();
        v0[2862707793] = v20;
        for (let v24 = 0; v24 < 100; v24++) {
        }
    }
}
const v25 = v11();
}
%NeverOptimizeFunction(main);
main();
