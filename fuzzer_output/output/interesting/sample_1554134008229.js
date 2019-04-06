function main() {
const v2 = [13.37];
const v4 = [13.37];
let v5 = v4;
function v6(v7,v8,v9,v10) {
    v5.replace = v8;
    const v12 = {get:v6};
    const v14 = Object.defineProperty(v5,"for",v12);
}
const v16 = v6(13.37,v6,"function",v2,v6);
const v20 = v6(1337,13.37,1337,13.37);
}
%NeverOptimizeFunction(main);
main();
