function main() {
const v7 = [1337];
with (v7) {
    const v15 = [13.37];
    const v18 = [1000000000000.0];
    const v20 = [1337,1337];
    const v21 = [1000000000000.0,v18,v18];
    const v22 = {setPrototypeOf:"delete",getInt32:v21,resolve:v20,ignoreCase:v21};
    function v23(v24,v25,v26,v27) {
        let v28 = v22;
        const v34 = {max:Function,setPrototypeOf:10};
    }
    const v43 = [v15];
    const v44 = v23(3607112468,Function,3607112468,v43,Function);
}
}
%NeverOptimizeFunction(main);
main();
