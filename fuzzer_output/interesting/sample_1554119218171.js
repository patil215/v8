function main() {
const v4 = [1337];
let v6 = undefined;
const v12 = new Int8Array(31042);
v12[-9007199254740992] = 10;
}
%NeverOptimizeFunction(main);
main();
