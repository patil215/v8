function main() {
const v2 = {keys:Function,__proto__:1337};
let v5 = 0;
const v9 = v5 + 1;
v5 = v9;
}
%NeverOptimizeFunction(main);
main();
