function main() {
let v4 = 0;
const v5 = v4 + 1;
v4 = v5;
const v8 = [9007199254740993,9007199254740993,9007199254740993];
const v9 = [v8,NaN,"number",Set];
const v10 = v9 >> v4;
}
%NeverOptimizeFunction(main);
main();
