function main() {
let v1 = "yhF0*R//FO";
const v2 = -Infinity;
const v4 = [1337,v1,1337,1337];
const v6 = v4.includes(1337,v2);
}
%NeverOptimizeFunction(main);
main();
