function main() {
const v1 = [13.37,13.37,13.37];
const v3 = {__defineGetter__:v1};
const v4 = {log2:v1,splice:1337,fround:v3};
const v5 = v3.__proto__;
const v8 = Array(16054);
const v9 = v5.__proto__;
const v11 = {set:Array};
const v12 = v11 <= v9;
v8.__proto__ = v4;
const v13 = new Float32Array(v8);
}
%NeverOptimizeFunction(main);
main();
