function main() {
const v4 = {all:"isPrototypeOf",name:1337,of:2147483647,has:13.37};
const v9 = [13.37,Symbol];
const v10 = v9 - 13.37;
const v15 = [v10,1337,1337];
const v16 = [v15,13.37,"number",Set];
for (const v17 of v16) {
    v17.__proto__ = v4;
}
const v18 = new Uint32Array(v15,arguments,v10,"number");
}
%NeverOptimizeFunction(main);
main();
