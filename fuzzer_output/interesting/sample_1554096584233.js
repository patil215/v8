function main() {
for (let v3 = 0; v3 < 5; v3++) {
    const v6 = "undefined" != 1337;
    const v16 = {get:Function};
    const v18 = Object.defineProperty(Function,"min",v16);
}
}
%NeverOptimizeFunction(main);
main();
