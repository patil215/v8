function main() {
let v1 = "includes";
const v4 = [v1,-2.220446049250313e-16];
const v6 = [-922564687,-922564687,-922564687];
const v7 = [v6,v6,-4267643975,v4];
const v9 = new Float32Array(v4);
let v12 = 0;
let v13 = v9;
const v14 = ~v12;
const v15 = new Uint32Array(v13,v13,v14,v14,v7);
}
%NeverOptimizeFunction(main);
main();
