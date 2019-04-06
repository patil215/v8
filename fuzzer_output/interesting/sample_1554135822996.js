function main() {
const v3 = [1337,1337,1337,1337,3647412246];
let v4 = v3;
const v7 = v4.concat(1337,1337,100,13.37);
}
%NeverOptimizeFunction(main);
main();
