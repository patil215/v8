function main() {
const v8 = [1337,1337,1337,1337];
const v9 = [-956001.3254401154];
const v10 = {find:v8,fill:arguments,length:"number",acos:"number"};
const v11 = {MIN_VALUE:"number",multiline:v10};
const v13 = Object("number","number",v11);
v13.__proto__ = v9;
}
%NeverOptimizeFunction(main);
main();
