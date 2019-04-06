function main() {
const v7 = [1337];
const v9 = [1337];
let v15 = 0;
const v16 = v15 + 1;
v15 = v16;
for (let v20 = 0; v20 < 100; v20++) {
    function v25(v26,v27,v28,v29,v30) {
        let v34 = Error;
        const v35 = v34(Error,1337,"log1p",v34);
        Function.is = v35;
    }
    const v39 = v25("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
