function main() {
function v1(v2,v3,v4,v5) {
    for (let v9 = 0; v9 < 100; v9++) {
        const v11 = v9 != undefined;
        if (v11) {
            const v12 = {set:v1,get:v1};
        } else {
        }
    }
}
const v21 = [1337];
const v22 = v1(10,Function,1337,v21,Function);
}
%NeverOptimizeFunction(main);
main();
