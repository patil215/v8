function main() {
let v4 = 0;
const v8 = v4 + 1;
v4 = v8;
const v14 = [1337];
for (let v18 = 0; v18 < 100; v18++) {
    let v20 = undefined;
    function v21(v22,v23,v24) {
    }
    const v27 = [13.37,13.37,13.37,13.37];
    function v28(v29,v30,v31,v32) {
        const v35 = {max:Function,setPrototypeOf:10};
        this.toString = v21;
    }
    const v41 = [1337];
    for (let v45 = 0; v45 < 100; v45++) {
        const v46 = v28(10,Function,1337,v41,Function);
    }
}
}
%NeverOptimizeFunction(main);
main();
