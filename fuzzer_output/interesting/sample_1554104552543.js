function main() {
const v1 = [1337,1337,1337];
const v7 = [1337];
let v11 = 0;
for (let v19 = 0; v19 < 100; v19++) {
    let v21 = undefined;
    const v23 = (9007199254740991).__proto__;
    v23[255] = v23;
    v23[1337] = 1337;
}
}
%NeverOptimizeFunction(main);
main();
