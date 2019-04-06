function main() {
let v1 = "undefined";
const v5 = [1337];
const v6 = [v5];
function v8(v9,v10,v11) {
    const v15 = Object.seal(arguments,-4096);
}
const v19 = [9];
const v20 = v8(13.37,"undefined",v1,v6,v19);
}
%NeverOptimizeFunction(main);
main();
