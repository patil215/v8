function main() {
const v5 = [1337,1337,1337,1337];
const v11 = [1337,1337,1337,1337];
const v12 = {find:v11,fill:RegExp,length:"number",acos:"number"};
const v46 = [13.37];
RegExp.__proto__ = v12;
RegExp.startsWith = v5;
const v75 = -521713708 % v46;
}
%NeverOptimizeFunction(main);
main();
