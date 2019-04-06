function main() {
let v5 = undefined;
const v7 = [1337];
let v8 = v7;
const v12 = [Set];
const v14 = {hasOwnProperty:1337};
const v16 = v14.__proto__;
v16[1337] = 13.37;
const v18 = [1337,1337,1337];
const v19 = [v18,13.37,"number",Set];
for (const v20 of v19) {
    v20[v8] = v20;
}
const v23 = v18.concat(v12,parseFloat,13.37);
}
%NeverOptimizeFunction(main);
main();
