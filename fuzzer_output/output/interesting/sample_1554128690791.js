function main() {
const v1 = [1337,1337,1337,1337,1337];
let v2 = v1;
for (let v6 = 0; v6 < 100; v6++) {
    const v8 = Object.freeze(v2,Object);
}
}
%NeverOptimizeFunction(main);
main();
