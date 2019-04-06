function main() {
const v3 = [SharedArrayBuffer];
const v5 = [13.37,1337,1337];
const v6 = [v5,13.37,"number",SharedArrayBuffer];
v5.length = 0;
const v10 = v5.concat(v3,parseFloat,13.37);
}
%NeverOptimizeFunction(main);
main();
