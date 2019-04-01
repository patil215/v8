function main() {
const v1 = [Function];
const v2 = [v1];
for (let v9 = 0; v9 < 5; v9++) {
    v2.length = 2760018085;
}
}
%NeverOptimizeFunction(main);
main();
