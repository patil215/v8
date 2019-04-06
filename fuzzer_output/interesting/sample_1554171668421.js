function main() {
const v5 = [13.37,Symbol];
const v6 = v5 - 65536;
const v11 = [v6,1337,1337];
const v12 = [v11,13.37,"number",Set];
const v13 = new Uint32Array(v11,arguments,v6,"number");
}
%NeverOptimizeFunction(main);
main();
