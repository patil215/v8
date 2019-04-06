function main() {
const v1 = [13.37];
for (let v5 = 0; v5 < 5; v5++) {
    const v7 = [13.37,13.37,13.37,13.37];
    function v8(v9,v10,v11,v12) {
        const v15 = {max:this,setPrototypeOf:10};
        v15.__proto__ = v7;
        const v17 = [1337];
        const v18 = {exec:v17};
        v15.getOwnPropertyDescriptors = v18;
    }
    const v24 = [1337];
    for (let v28 = 0; v28 < 100; v28++) {
        const v29 = v8(10,Reflect,1337,v24,Function);
    }
}
function v33(v34,v35,v36,v37,v38) {
    for (let v41 = 0; v41 < 3; v41 = v41 + v35) {
        const v42 = typeof v41;
        const v44 = v42 === "number";
    }
}
}
%NeverOptimizeFunction(main);
main();
