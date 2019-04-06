function main() {
const v3 = [13.37,13.37];
function v4(v5,v6,v7,v8) {
}
function v9(v10,v11,v12,v13) {
    let v16 = undefined;
    for (let v20 = 0; v20 < 100; v20++) {
        const v23 = [13.37,10,13.37,13.37];
        for (const v24 of v23) {
            for (let v27 = 0; v27 < 10; v27++) {
                function v28(v29,v30,v31,v32) {
                    function v33(v34,v35) {
                        const v36 = {};
                        const v37 = [v36];
                        v27.__proto__ = v24;
                    }
                    const v39 = v33(...arguments);
                }
                const v45 = [536870912];
                const v46 = v28(10,Function,127,v45,Function);
            }
        }
    }
}
const v47 = {preventExtension:v9,get:v4,deleteProperty:v9,has:v9,defineProperty:v9,getOwnPropertyDescriptor:v4,call:v4,set:v9,ownKeys:v9,setPrototypeOf:v4,construct:v9};
const v49 = new Proxy(v3,v47);
const v51 = {length:v9};
const v53 = Reflect.defineProperty(v49,2998604110,v51);
}
%NeverOptimizeFunction(main);
main();
