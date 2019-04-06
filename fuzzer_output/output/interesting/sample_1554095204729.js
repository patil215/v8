function main() {
const v4 = [1337,1337,1337,1337];
const v5 = {find:v4,fill:Map,length:"number",acos:"number"};
v5[1] = 1337;
}
%NeverOptimizeFunction(main);
main();
