function main() {
const v4 = {};
const v5 = [v4,1579286179,v4,v4,v4];
const v6 = new Int32Array(v5,512,v4,Function);
}
%NeverOptimizeFunction(main);
main();
