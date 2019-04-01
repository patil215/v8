function main() {
let v13 = 0;
const v14 = "undefined" << 1337;
const v15 = v13 + 1;
let v18 = 0;
const v19 = v18["undefined"];
const v20 = v18 + 1;
v18 = v20;
v13 = v15;
let v23 = 13.37;
const v30 = [Function];
const v31 = [v30];
let v33 = v31;
const v44 = v30.constructor(v23,1337,1337);
}
%NeverOptimizeFunction(main);
main();
