function main() {
const v4 = ["isSealed",4003233035,4003233035];
const v5 = [v4,4003233035,"number",arguments];
for (const v6 of v5) {
    v6[16] = arguments;
}
const v8 = v4.includes(13.37,v5);
}
%NeverOptimizeFunction(main);
main();
