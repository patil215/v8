function main() {
const v1 = [13.37,13.37,13.37,13.37];
const v3 = [1337,1337,1337];
let v4 = v1;
const v7 = ["log1p"];
let v8 = v3;
let v11 = undefined;
const v13 = {get:v4};
const v15 = Object.values(v8,"for",v13);
}
%NeverOptimizeFunction(main);
main();
