function main() {
const v3 = [13.37,13.37];
const v5 = [1337];
const v6 = ["number",RegExp,v3];
const v7 = v5.__proto__;
v7[2147483649] = v6;
const v15 = [13.37,13.37];
const v17 = [1337,1337];
const v18 = {flat:1337,BYTES_PER_ELEMENT:-2,trim:13.37,trimStart:v15,rightContext:Boolean,assign:v15,all:"J9.cPbxCJ6",NEGATIVE_INFINITY:v17,message:"J9.cPbxCJ6"};
const v20 = v15.indexOf(1337,v18,Function);
}
%NeverOptimizeFunction(main);
main();
