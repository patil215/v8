function main() {
let v3 = 13.37;
const v4 = {exec:1107472306};
const v6 = [1337];
let v11 = 0;
Function.__proto__ = v4;
const v12 = v11 + 1;
v11 = v12;
for (const v15 in Function) {
    const v16 = new ArrayBuffer(13.37,1,v6,v15);
}
}
%NeverOptimizeFunction(main);
main();
