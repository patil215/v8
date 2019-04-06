function main() {
const v5 = [NaN];
const v7 = [1337,268435456];
const v8 = v5.indexOf(NaN,-3686643326,v7,321274.8817564084,1337);
}
%NeverOptimizeFunction(main);
main();
