function main() {
const v3 = [13.37];
const v5 = [1337,1337,1337,1337];
const v6 = [v3,1337,268435456,13.37];
const v7 = {};
const v8 = {toLocaleString:v6,getInt8:v7,E:v5,slice:v6,__lookupSetter__:v3};
function v9(v10,v11,v12,v13) {
    for (const v14 of "ceil") {
        const v15 = typeof v14;
        const v16 = v15 <= v10;
    }
}
for (let v20 = 0; v20 < 100; v20++) {
    const v21 = v9(13.37,v8,v6,1);
}
}
%NeverOptimizeFunction(main);
main();
