function main() {
const v2 = [13.37];
const v4 = [1337,1337];
const v5 = [13.37,v2,v2];
const v6 = {setPrototypeOf:"delete",getInt32:v5,resolve:v4,ignoreCase:v5};
function v7(v8,v9,v10,v11) {
    let v13 = "undefined";
    let v15 = v6;
    do {
        const v16 = v15 + 1;
        v15 = v16;
    } while (v15 < 5);
    const v17 = v15.__proto__;
}
const v23 = [1337];
for (let v27 = 0; v27 < 100; v27++) {
    const v28 = v7(10,Function,1337,v23,Function);
}
}
%NeverOptimizeFunction(main);
main();
