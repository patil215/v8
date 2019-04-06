function main() {
const v4 = [13.37,13.37];
const v5 = ["number",13.37,"number",Math];
const v6 = {sort:v4,b:-592938409,test:v4};
const v10 = [1337,1337,1337];
const v11 = [];
const v12 = {splice:v11,setFloat64:v11,log:1337,getFloat64:-3983639058,sticky:"string",ownKeys:"string",getUint8:v10};
for (let v18 = 0; v18 < 100; v18++) {
    const v21 = [1337,1337,1337,1337,1337];
    const v22 = Function.bind(Function,v21,1337);
    v12.__proto__ = v22;
    const v23 = {clear:v6,toLowerCase:Function,a:1337,...v18,...v5,...v22,...0};
}
}
%NeverOptimizeFunction(main);
main();
