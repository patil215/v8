function main() {
const v2 = [1337,String];
function v3(v4,v5,v6,v7) {
    function v8(v9,v10,v11,v12) {
        const v15 = [1337];
        const v16 = [v15];
        const v18 = new Proxy(v16,v8);
        v18.fill = Function;
        v18[-1514743039] = v6;
    }
    const v28 = [1337];
    const v32 = v8(10,Function,1337,v28,Function);
}
const v38 = [1337];
const v39 = v3(10,Function,1337,v38,Function);
const v42 = v3(Function,Object,v2);
}
%NeverOptimizeFunction(main);
main();
