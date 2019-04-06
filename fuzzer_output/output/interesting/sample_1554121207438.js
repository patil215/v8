function main() {
function v4(v5,v6,v7,v8,v9) {
    const v11 = v8.clz32(v6,0,"undefined");
    return v11;
}
for (let v15 = 0; v15 < 100; v15++) {
    const v16 = v4("undefined",1337,13.37,Math);
}
}
%NeverOptimizeFunction(main);
main();
