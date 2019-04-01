function main() {
const v3 = [1337];
const v4 = {max:Function,setPrototypeOf:10};
const v6 = [1337];
let v9 = 0;
const v10 = v9 + 1;
v9 = v10;
let v14 = 0;
v14 = 10;
for (const v15 in v3) {
    v6[v15] = v15;
}
}
%NeverOptimizeFunction(main);
main();
