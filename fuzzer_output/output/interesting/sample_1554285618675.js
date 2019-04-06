function main() {
for (let v4 = 0; v4 < 100; v4++) {
    const v9 = [13.37,"undefined",13.37];
    const v11 = [1337,1337,1337];
    const v12 = ["undefined",v11,1337,WeakMap];
    const v13 = {getUint8:v12,fill:v9,input:-4294967295,test:WeakMap,getInt8:-4294967295,pow:v9,some:"undefined",min:"undefined"};
    const v16 = {map:undefined,toPrimitive:13.37};
    function v17(v18,v19,v20,v21) {
        function v22(v23,v24) {
        }
        const v29 = [1337];
        let v31 = undefined;
        let v40 = 0;
        const v41 = v40 + 1;
        v40 = v41;
        const v43 = RegExp.lastParen;
        const v45 = {set:v17,get:v22};
        const v47 = Object.defineProperty(RegExp,"lastParen",v45);
    }
    const v51 = [Map];
    const v52 = v51.map(v17,v13,v16);
}
}
%NeverOptimizeFunction(main);
main();
