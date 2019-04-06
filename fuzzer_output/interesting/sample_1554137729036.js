function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
const v3 = ["log1p"];
let v4 = v1;
let v7 = undefined;
const v9 = {get:13.37};
const v11 = Object.values(v4,"for",v9);
}
%NeverOptimizeFunction(main);
main();
