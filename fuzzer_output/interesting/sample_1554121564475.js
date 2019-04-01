function main() {
const v1 = [13.37];
function v6(v7,v8,v9,v10,v11) {
    for (let v15 = 0; v15 < 3; v15++) {
        for (const v16 of v1) {
            delete v1[0];
        }
    }
}
for (let v21 = 0; v21 < 100; v21++) {
    const v22 = v6("undefined",1337,13.37,Math);
    const v24 = {set:v6};
    const v26 = Object.defineProperty(v1,"rightContext",v24);
}
}
%NeverOptimizeFunction(main);
main();
