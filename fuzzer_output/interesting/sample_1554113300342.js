function main() {
function v0(v1,v2,v3,v4) {
    const v6 = [1337,1337];
    const v9 = {max:Function,setPrototypeOf:10};
    let v11 = "undefined";
    for (let v15 = 0; v15 < 5; v15++) {
        const v18 = {max:Function,setPrototypeOf:10};
        const v19 = v18.__proto__;
        v19.message = v15;
    }
    let v21 = "undefined";
    let v24 = 0;
    const v25 = v24 + 1;
    v24 = v25;
}
const v31 = [1337];
for (let v35 = 0; v35 < 100; v35++) {
    const v36 = v0(10,Function,1337,v31,gc);
}
}
%NeverOptimizeFunction(main);
main();
