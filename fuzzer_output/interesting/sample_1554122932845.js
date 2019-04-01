function main() {
const v2 = [13.37];
const v5 = new Int8Array(31280);
const v6 = {normalize:arguments,...v2,...v5,...v2,...v5};
}
%NeverOptimizeFunction(main);
main();
