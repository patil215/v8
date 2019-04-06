function main() {
const v6 = [1337,1337,1337];
const v7 = [];
const v8 = {splice:v7,setFloat64:v7,log:1337,getFloat64:-3983639058,sticky:"string",ownKeys:"string",getUint8:v6};
const v9 = Reflect.set(v8,v6,13.37,1337,1337);
}
%NeverOptimizeFunction(main);
main();
