function main() {
for (let v3 = 0; v3 < 5; v3++) {
    const v5 = [13.37,13.37,13.37,13.37];
    function v6(v7,v8,v9,v10) {
        const v13 = {max:this,setPrototypeOf:10};
        v13.__proto__ = v5;
        v13.isFrozen = v13;
    }
    const v19 = [1337];
    for (let v23 = 0; v23 < 100; v23++) {
        const v24 = v6(10,Reflect,1337,v19,Function);
    }
}
}
%NeverOptimizeFunction(main);
main();
