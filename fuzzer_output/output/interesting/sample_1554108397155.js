function main() {
function v1(v2,v3,v4,v5) {
    const v13 = [13.37];
    const v15 = [1337,1337,1337];
    const v16 = [v15,13.37,"number",Set];
    const v17 = {getUint8:v16,create:16,getPrototypeOf:"number",getOwnPropertyDescriptor:16,setInt16:v13,toStringTag:v15,filter:13.37};
    function v18(v19,v20,v21,v22) {
        const v24 = [1337];
        let v26 = "undefined";
        const v27 = typeof v26;
        const v28 = v27 === v17;
        const v31 = Function && 13.37;
        let v34 = 0;
        do {
            const v35 = v34 + 1;
            let v38 = 0;
            const v39 = Function + 1;
            v38 = v39;
            for (const v40 of v38) {
            }
            v34 = v35;
        } while (v34 < 5);
    }
    const v46 = [1337];
    const v48 = v18(10,Function,1337,v46,Function);
    let v52 = 0;
    v52 = 10;
    v52.toString = v1;
}
const v58 = [1337];
for (let v62 = 0; v62 < 100; v62++) {
    const v63 = v1(10,Function,1337,v58,Function);
}
}
%NeverOptimizeFunction(main);
main();
