function main() {
const v1 = [1337,1337,1337,1337,1337];
const v3 = new Int16Array(v1);
for (let v8 = 0; v8 < 9; v8++) {
    const v9 = v3.indexOf(2804553026,v8,Int16Array,v1);
}
}
%NeverOptimizeFunction(main);
main();
