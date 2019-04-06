function main() {
const v1 = {hasOwnProperty:1337};
const v3 = v1.__proto__;
v3[1337] = 13.37;
const v5 = [];
const v8 = [13.37,13.37,13.37];
const v9 = [v8];
v9[4096] = 1337;
const v10 = v9.concat(v5,"bA3/7D9Jkc");
}
%NeverOptimizeFunction(main);
main();
