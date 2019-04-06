function main() {
let v32 = 0;
const v33 = v32 + 1;
v32 = v33;
const v38 = [13.37];
with (v38) {
}
}
%NeverOptimizeFunction(main);
main();
