function main() {
for (let v3 = 0; v3 < 100; v3++) {
    const v4 = v3.charAt;
    const v5 = typeof v4;
    const v7 = v5 === "undefined";
    const v9 = [13.37,13.37];
    function v10(v11,v12,v13,v14) {
    }
    function v15(v16,v17,v18,v19) {
        const v21 = [1337];
        const v22 = [v21];
    }
    const v26 = {preventExtension:v15,get:v10,deleteProperty:v15,has:v15,defineProperty:v15,getOwnPropertyDescriptor:v10,call:v10,set:v15,ownKeys:v15,setPrototypeOf:v10,construct:v15};
    const v28 = new Proxy(v9,v26);
    const v30 = {length:v15};
    const v32 = Reflect.preventExtensions(v28,1337,v30);
}
}
%NeverOptimizeFunction(main);
main();
