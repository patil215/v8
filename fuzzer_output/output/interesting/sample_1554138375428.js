function main() {
const v1 = [1337];
let v2 = v1;
const v6 = [Set];
const v8 = {hasOwnProperty:1337};
const v10 = v8.__proto__;
v10[1337] = 13.37;
const v12 = [1337];
const v13 = {exec:v12};
const v17 = new Uint8Array(RegExp,-0.0,v13);
const v19 = [1337,1337,1337];
const v20 = [v19,13.37,"number",Set];
for (const v21 of v20) {
    v21[v2] = v21;
}
const v24 = v19.concat(v6,parseFloat,13.37);
}
%NeverOptimizeFunction(main);
main();
