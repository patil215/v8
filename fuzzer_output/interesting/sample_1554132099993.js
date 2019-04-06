function main() {
for (let v6 = 0; v6 < 5; v6++) {
    const v8 = [13.37,13.37,13.37,13.37];
    function v9(v10,v11,v12,v13) {
        const v16 = {max:this,setPrototypeOf:10};
        v16.__proto__ = v8;
        let v18 = "undefined";
        const v21 = [1337];
        const v22 = {exec:v21};
        let v25 = 0;
        const v26 = v25 + 1;
        v25 = v26;
        v16.getOwnPropertyDescriptors = v22;
    }
    const v32 = [1337];
    for (let v36 = 0; v36 < 100; v36++) {
        const v37 = v9(10,Reflect,1337,v32,Function);
    }
}
}
%NeverOptimizeFunction(main);
main();
