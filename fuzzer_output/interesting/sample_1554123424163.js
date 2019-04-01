function main() {
function v0(v1,v2,v3,v4) {
    const v6 = {reduce:v4,isInteger:v1,sin:v1,...Math};
    const v8 = {get:v0};
    const v10 = Object.defineProperty(Math,"abs",v8);
}
const v19 = [1337];
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v0(10,Function,1337,v19,Symbol);
}
}
%NeverOptimizeFunction(main);
main();
