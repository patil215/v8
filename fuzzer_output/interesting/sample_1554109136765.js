function main() {
const v4 = [1337];
const v5 = {exec:v4};
const v7 = [1337];
let v10 = 0;
const v11 = v10 + 1;
v10 = v11;
const v13 = [1337];
const v15 = [1337];
const v16 = [v13];
const v17 = v5.propertyIsEnumerable(v15,Function,"undefined",Function,v7);
}
%NeverOptimizeFunction(main);
main();
