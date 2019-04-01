function main() {
const v1 = [13.37];
const v4 = [1000000000000.0];
const v6 = [1337,1337];
const v7 = [1000000000000.0,v4,v4];
const v8 = {setPrototypeOf:"delete",getInt32:v7,resolve:v6,ignoreCase:v7};
function v9(v10,v11,v12,v13) {
    let v14 = v8;
    const v15 = v14 + 1;
    v14 = v15;
    const v16 = v14.__proto__;
    for (let v20 = 0; v20 < 5; v20++) {
        const v23 = "undefined" != 1337;
        const v26 = {max:Function,setPrototypeOf:10};
        for (let v30 = 0; v30 < 7; v30++) {
            v26.lastIndexOf = v30;
        }
    }
    return v16;
}
const v35 = [v1];
for (let v39 = 0; v39 < 100; v39++) {
    const v40 = v9(10,Function,3607112468,v35,Function);
}
}
%NeverOptimizeFunction(main);
main();
