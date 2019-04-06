function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    v2 = v3;
    const v8 = ["function"];
    let v9 = v8;
    const v12 = [13.37,13.37];
    function v13(v14,v15,v16,v17) {
    }
    function v18(v19,v20,v21,v22) {
        const v30 = [13.37,13.37,13.37,13.37,13.37];
        const v32 = [1337,1337,v22,1337];
        const v33 = [v9];
        const v34 = {LN10:Boolean,clear:v12,multiline:"prototype",isSafeInteger:v30,exec:-1984769435,assign:v33,call:13.37};
        const v35 = {parseFloat:v32,asinh:1337,lastMatch:v34,subarray:-1984769435,isSafeInteger:1337};
        let v36 = v35;
        function v37(v38,v39,v40,v41) {
            const v42 = v13[v41];
        }
        const v44 = {construct:v37,defineProperty:v37,get:v37,set:v37,apply:v37,call:v37,ownKeys:v37,preventExtension:v37};
        const v46 = new Proxy(Function,v44);
        const v47 = v37(v35,v46,v36,"prototype");
    }
    const v48 = {preventExtension:v18,get:v13,deleteProperty:v18,has:v18,defineProperty:v18,getOwnPropertyDescriptor:v13,call:v13,set:v18,ownKeys:v18,setPrototypeOf:v13,construct:v18};
    const v50 = new Proxy(v12,v48);
    const v51 = v18(v50,v13,v18,v13,"3zWPoLio6+");
} while (v2 < 6);
}
%NeverOptimizeFunction(main);
main();
