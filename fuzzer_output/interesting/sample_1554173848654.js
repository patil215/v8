function main() {
const v0 = [];
let v1 = v0;
let v9 = undefined;
const v11 = [13.37,13.37,13.37,13.37];
for (let v15 = 0; v15 < 5; v15++) {
    v1 = v11;
    v11[10] = v15;
}
let v19 = v1;
const v22 = v19.concat(1337,1337,100,13.37);
}
%NeverOptimizeFunction(main);
main();
