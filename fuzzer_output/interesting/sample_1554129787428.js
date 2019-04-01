function main() {
const v2 = [13.37,13.37,13.37,13.37];
function v3(v4,v5,v6,v7) {
    v4.__proto__ = v5;
    const v9 = {max:1337,setPrototypeOf:10};
    const v12 = {max:Function,setPrototypeOf:10};
    v9.__proto__ = v2;
    const v14 = [1337];
}
const v23 = [1337];
for (let v27 = 0; v27 < 100; v27++) {
    const v28 = v3(10,Function,1337,v23,Function);
}
}
%NeverOptimizeFunction(main);
main();
