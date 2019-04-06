function main() {
const v1 = [1337,1337,1337,1337,1337];
const v4 = new Int16Array(21380);
for (let v9 = 0; v9 != 4096; v9++) {
    const v10 = v4.lastIndexOf(-2270815885,v9,Int16Array,v1);
}
}
%NeverOptimizeFunction(main);
main();
