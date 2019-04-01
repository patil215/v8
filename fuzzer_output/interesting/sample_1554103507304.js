function main() {
for (let v3 = 0; v3 < 5; v3++) {
    const v5 = {};
    const v7 = new Proxy(Function,v5);
    v7[0] = Proxy;
}
}
%NeverOptimizeFunction(main);
main();
