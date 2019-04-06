function main() {
let v6 = undefined;
const v8 = [100];
for (const v11 of v8) {
    const v12 = typeof v11;
    const v13 = v12 <= v11;
    let v15 = undefined;
    const v16 = Promise.race(v13,v6);
}
}
%NeverOptimizeFunction(main);
main();
