function main() {
const v1 = [2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
for (let v5 = 0; v5 < 5; v5++) {
    v1[409084423] = v5;
}
}
%NeverOptimizeFunction(main);
main();
