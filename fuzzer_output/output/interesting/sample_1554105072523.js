function main() {
const v1 = -Infinity;
const v2 = [v1,v1,v1];
const v3 = v2[4294967297];
const v4 = v2 | "apply";
}
%NeverOptimizeFunction(main);
main();
