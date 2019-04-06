function main() {
const v1 = [1337,1337,1337,1337];
const v4 = [13.37,13.37];
const v5 = {localeCompare:v4,indexOf:"set"};
const v10 = new Uint8ClampedArray(62509);
const v11 = -Infinity;
const v12 = v10.indexOf(v1,127,v5,3754041050,v11);
}
%NeverOptimizeFunction(main);
main();
