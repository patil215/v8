function main() {
const v1 = {setInt8:1337};
const v3 = v1.__proto__;
v3[1337] = 685873.5511442542;
const v5 = [];
const v8 = [-2.0,-2.0,-2.0];
const v9 = [v8];
const v12 = [13.37];
v9[3.0] = v12;
v9[1337] = 1337;
const v13 = v9.concat(v5,"bA3/7D9Jkc");
}
%NeverOptimizeFunction(main);
main();
