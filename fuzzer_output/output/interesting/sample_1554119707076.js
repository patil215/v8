function main() {
const v3 = Float32Array.bind(Function,1337);
for (let v10 = 0; v10 < 5; v10++) {
    const v11 = gc(3,v10,v10,v10,Function);
}
}
%NeverOptimizeFunction(main);
main();
