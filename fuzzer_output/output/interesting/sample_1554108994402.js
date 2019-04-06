function main() {
let v2 = 0;
do {
    const v6 = [13.37];
    function v13(v14,v15,v16,v17,v18) {
        const v20 = [13.37,13.37,13.37,13.37];
        let v23 = undefined;
        const v25 = {set:v13};
        const v27 = Object.defineProperty(v20,"tanh",v25);
        const v30 = v27.__proto__;
    }
    let v39 = undefined;
    const v40 = v13(1337,Math,9007199254740991,9007199254740991);
    const v44 = v2 + 1;
    v2 = v44;
} while (v2 < 2);
let v47 = 0;
let v50 = 0;
const v51 = v50 + 1;
v50 = v51;
const v52 = v47 + 1;
v47 = v52;
}
%NeverOptimizeFunction(main);
main();
