function main() {
const v2 = ["object",1337];
const v4 = [1337,1337,1337,1337,1337];
const v7 = new Int16Array(21380);
for (let v11 = 0; v11 != 9; v11++) {
    const v12 = v7.lastIndexOf(v2,v11,Int16Array,v4);
}
}
%NeverOptimizeFunction(main);
main();
