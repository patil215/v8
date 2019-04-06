function main() {
const v4 = [1337,1337,1337];
const v5 = [v4,13.37,"number",arguments];
for (const v6 of v5) {
    v6[16] = arguments;
}
const v7 = v4.includes(1337,v5);
}
%NeverOptimizeFunction(main);
main();
