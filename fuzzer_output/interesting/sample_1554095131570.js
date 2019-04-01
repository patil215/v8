function main() {
const v3 = {find:1337,fill:RegExp,length:"number",acos:"number"};
const v7 = [1337,1337,1337,1337];
const v8 = {find:v7,fill:arguments,length:"number",acos:"number"};
}
%NeverOptimizeFunction(main);
main();
