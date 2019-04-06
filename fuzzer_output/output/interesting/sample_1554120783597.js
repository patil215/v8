function main() {
const v3 = [1337,1337,1337,1337,1337];
const v4 = ["pbT7*3+vkt",v3,v3,"pbT7*3+vkt"];
const v5 = {hasOwnProperty:1337};
const v7 = [13.37];
const v11 = v5 === 1337;
v7.__proto__ = v4;
let v13 = undefined;
const v18 = [];
const v20 = v18 <= 10;
Function.__proto__ = v7;
let v25 = "undefined";
for (const v27 in Function) {
}
}
%NeverOptimizeFunction(main);
main();
