function main() {
const v3 = [1337,1337,1337,1337];
const v4 = {find:v3,fill:RegExp,length:"number",acos:"number"};
const v5 = v4.__proto__;
}
%NeverOptimizeFunction(main);
main();
