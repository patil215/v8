function main() {
const v2 = [395760.8389943177,395760.8389943177];
const v4 = [1337];
const v5 = [1337,BigInt,BigInt,v2];
const v6 = {create:v4,toExponential:v5};
const v10 = new Float32Array(7);
const v11 = v10.indexOf(Error,v6);
}
%NeverOptimizeFunction(main);
main();
