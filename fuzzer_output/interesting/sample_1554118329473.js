function main() {
for (let v3 = 0; v3 < 100; v3++) {
    for (const v5 in Function) {
        Function[574133263] = v5;
    }
    Function[10] = "undefined";
}
for (let v12 = 0; v12 < 100; v12++) {
    Function[1832001116] = "undefined";
    for (const v16 in Function) {
    }
    const v20 = Function.__defineGetter__(1337,Function,10);
}
}
%NeverOptimizeFunction(main);
main();
