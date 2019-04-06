function main() {
let v3 = undefined;
const v4 = [100];
const v5 = typeof v3;
const v6 = v5 <= v5;
const v7 = Promise.race(v6,v3);
}
%NeverOptimizeFunction(main);
main();
