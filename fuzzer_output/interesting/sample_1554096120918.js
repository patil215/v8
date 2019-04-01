function main() {
const v20 = [1337];
let v64 = 0;
const v65 = v20 | 1337;
const v66 = v64 + 1;
v64 = v66;
let v263 = "undefined";
let v269 = 0;
v269 = 10;
}
%NeverOptimizeFunction(main);
main();
