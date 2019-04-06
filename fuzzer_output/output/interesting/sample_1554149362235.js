function main() {
const v1 = [13.37,13.37,13.37];
const v3 = [];
const v4 = {iterator:1337,getUint8:v1,reverse:v3};
const v9 = [13.37,13.37,13.37,13.37];
v9.__proto__ = v4;
const v13 = new Uint8Array(v9);
}
%NeverOptimizeFunction(main);
main();
