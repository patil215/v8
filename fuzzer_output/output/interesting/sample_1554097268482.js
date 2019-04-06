function main() {
const v2 = [..."J9.cPbxCJ6","J9.cPbxCJ6"];
const v3 = [13.37,13.37];
v2[1337] = v3;
}
%NeverOptimizeFunction(main);
main();
