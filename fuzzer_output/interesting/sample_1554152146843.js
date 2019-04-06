function main() {
const v3 = [1337,1337,1337];
const v4 = [v3,13.37,v3];
const v6 = [-65535,1337,v4];
const v10 = [13.37];
const v12 = [1337,1337,1337];
v12.constructor = v6;
const v13 = [v12,13.37,"number",Set];
const v16 = v12.concat(v10,Math,-5.0);
}
%NeverOptimizeFunction(main);
main();
