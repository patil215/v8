function main() {
const v1 = -1777286928 - -1777286928;
for (let v5 = 0; v5 < 100; v5++) {
    function v6(v7,v8,v9,v10) {
        const v12 = [13.37,13.37];
        function v13(v14,v15,v16,v17) {
        }
        function v18(v19,v20,v21,v22) {
            function v26(v27,v28,v29,v30) {
                const v32 = [13.37,v29,13.37,13.37];
                function v35(v36,v37,v38,v39) {
                    const v41 = [13.37,v36,13.37,13.37];
                }
            }
        }
        const v48 = {preventExtension:v18,get:v13,deleteProperty:v18,has:v18,defineProperty:v18,getOwnPropertyDescriptor:v13,call:v13,set:v18,ownKeys:v18,setPrototypeOf:v13,construct:v18};
        const v50 = new Proxy(v12,v48);
        const v52 = {toLocaleLowerCase:v18};
        const v54 = Reflect.has(v50,1337,v52);
    }
    const v55 = v6(v1);
}
}
%NeverOptimizeFunction(main);
main();
