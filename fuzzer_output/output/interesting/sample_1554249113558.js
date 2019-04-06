function main() {
const v2 = [1337,1337,1337,1337];
const v3 = ["object",1337];
const v4 = {round:1337,keyFor:v2,has:v2,ceil:v2};
const v5 = v2 + v4;
const v13 = [1337,1337,1337];
const v14 = [v13,13.37,"number",this];
const v18 = v5.localeCompare(v3,7);
}
%NeverOptimizeFunction(main);
main();
