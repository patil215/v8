function main() {
let v1 = "PI";
const v4 = [v1,13.37];
const v6 = [-922564687,-922564687,-922564687];
const v10 = [v6,v6,-4267643975,v4];
const v12 = new Float32Array(v4);
let v15 = 0;
let v16 = v12;
const v17 = ~v15;
const v18 = new Uint32Array(v16,v16,v17,v17,v10);
}
%NeverOptimizeFunction(main);
main();
