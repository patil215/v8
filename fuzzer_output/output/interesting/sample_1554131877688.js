function main() {
const v5 = Symbol(..."undefined");
const v8 = [1337,1337,1337,1337,1337];
const v11 = [1337];
const v12 = v8 << String;
const v15 = gc(v12,v11,0);
}
%NeverOptimizeFunction(main);
main();
