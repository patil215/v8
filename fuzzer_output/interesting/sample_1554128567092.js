function main() {
const v5 = [1337];
let v10 = undefined;
const v13 = new Uint8Array(65535);
const v14 = v13[52698];
}
%NeverOptimizeFunction(main);
main();
