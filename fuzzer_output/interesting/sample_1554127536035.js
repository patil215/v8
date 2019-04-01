function main() {
const v1 = [13.37,13.37,13.37,13.37];
let v2 = 13.37;
const v3 = v2.toString(13.37,v1);
}
%NeverOptimizeFunction(main);
main();
