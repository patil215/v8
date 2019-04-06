function main() {
const v1 = [13.37,13.37];
function v2(v3,v4,v5,v6) {
    const v8 = {max:v1,setPrototypeOf:1337};
    v8.length = v3;
    let v10 = v5;
    do {
        v8.valueOf = v2;
    } while (v10 < 9);
}
const v16 = [1000];
for (let v20 = 0; v20 < 100; v20++) {
    const v21 = v2(10,Function,1337,v16,Function);
}
}
%NeverOptimizeFunction(main);
main();
