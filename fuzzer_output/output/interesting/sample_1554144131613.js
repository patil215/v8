function main() {
const v4 = [1337,1337];
const v5 = ["function"];
const v6 = {bind:Number,endsWith:v5,tan:Number,reverse:v5,log2:v4,push:3447856264,input:Number,repeat:"function"};
const v8 = [];
v8[2.0] = v6;
v8.length = 1;
}
%NeverOptimizeFunction(main);
main();
