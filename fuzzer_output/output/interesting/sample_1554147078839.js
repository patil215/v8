function main() {
const v5 = {hasOwnProperty:1337};
const v7 = v5.__proto__;
v7[1337] = 13.37;
const v9 = [1337,1337,1337];
const v10 = [v9,13.37,"number",Set];
const v14 = [1337];
for (let v19 = 0; v19 < 100; v19++) {
    let v20 = 1337;
    let v21 = v14;
    v21[v20] = v19;
    const v22 = v14.shift(Function,10,1337,v14);
}
}
%NeverOptimizeFunction(main);
main();
