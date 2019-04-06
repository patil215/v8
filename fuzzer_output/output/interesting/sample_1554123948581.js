function main() {
function v1(v2,v3,v4,v5) {
    const v6 = {log:v2,has:v3,isSafeInteger:v3,copyWithin:RegExp};
    const v13 = [1337];
    for (let v17 = 0; v17 < 100; v17++) {
        let v19 = undefined;
        v6[1337] = v13;
    }
}
const v25 = [1337];
const v27 = v1(10,Function,1337,v25,Function);
const v29 = v1(v1,100);
}
%NeverOptimizeFunction(main);
main();
