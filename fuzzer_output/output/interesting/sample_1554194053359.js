function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = {seal:1337,find:v2,log:gc,assign:v2,BYTES_PER_ELEMENT:gc,LOG2E:v2};
const v7 = [1337,1337,1337,1337,1337];
v7.__proto__ = v4;
const v10 = new Int16Array(v7,8154,255);
}
%NeverOptimizeFunction(main);
main();
