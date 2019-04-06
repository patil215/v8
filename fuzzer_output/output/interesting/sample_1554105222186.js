function main() {
const v4 = [1337,1337,1337];
function v5(v6,v7,v8,v9) {
    const v10 = {call:this,unshift:v7,toExponential:v8,ceil:v8,fround:1337,trimRight:v6,freeze:v4};
}
for (let v16 = 0; v16 < 100; v16++) {
    const v17 = v5(1337,v5,13.37,v4);
}
const v21 = Function + 1;
const v22 = v5("apply",v21,this,this,Function,10);
}
%NeverOptimizeFunction(main);
main();
