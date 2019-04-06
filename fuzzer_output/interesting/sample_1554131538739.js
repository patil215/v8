function main() {
const v1 = [13.37,13.37];
let v2 = v1;
const v4 = [v2,1337,1337,1337,1337];
const v6 = new Uint8Array(v4);
}
%NeverOptimizeFunction(main);
main();
