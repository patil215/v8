function main() {
const v4 = !"undefined";
let v8 = 0;
const v9 = parseInt(0,"unicode",1337,v4);
const v10 = v8 + 1;
v8 = v10;
}
%NeverOptimizeFunction(main);
main();
