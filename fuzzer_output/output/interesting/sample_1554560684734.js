function main() {
const v1 = [1337,1337,1337,1337,1337];
const v4 = [13.37,13.37];
const v5 = {localeCompare:v4,indexOf:"set"};
const v9 = new Uint8ClampedArray(v1);
const v10 = -Infinity;
const v11 = v9.indexOf(255,-1,v5,255,v10);
}
%NeverOptimizeFunction(main);
main();
