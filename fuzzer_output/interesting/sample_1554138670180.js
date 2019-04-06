function main() {
const v2 = [1337,1337,1337,1337,1337];
const v3 = [v2];
const v4 = {asinh:v3,hasOwnProperty:v3,toLowerCase:v2};
const v7 = [1337];
const v11 = new Map(v3,v7,5,1337);
v11[-2216950832] = v4;
}
%NeverOptimizeFunction(main);
main();
