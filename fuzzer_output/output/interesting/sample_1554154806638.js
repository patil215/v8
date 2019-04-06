function main() {
const v6 = [1337,1337,1337];
const v7 = [v6,13.37,"number",Set];
const v9 = {hasOwnProperty:1337};
const v11 = v9.__proto__;
v11[1337] = 13.37;
const v12 = [];
const v15 = [-2.0,-2.0,-2.0];
const v16 = [v15];
const v18 = [13.37];
v16[95045741] = v18;
v16[1337] = 1337;
const v19 = v16.concat(v12,"bA3/7D9Jkc");
}
%NeverOptimizeFunction(main);
main();
