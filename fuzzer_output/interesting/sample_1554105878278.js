function main() {
const v15 = [1337];
const v16 = {exec:v15};
const v22 = [1337];
const v23 = {exec:v22};
const v32 = [13.37,13.37,13.37,13.37];
const v102 = v16 === v32;
const v106 = 0 / 0;
const v107 = 1337 === v23;
}
%NeverOptimizeFunction(main);
main();
