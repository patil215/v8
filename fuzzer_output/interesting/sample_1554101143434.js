function main() {
let v9 = 0;
let v11 = 0;
const v12 = v9 + 1;
v9 = v12;
const v16 = [1337];
const v17 = [v16];
with (v17) {
    const v18 = v17.startsWith;
    v11 = v18;
}
}
%NeverOptimizeFunction(main);
main();
