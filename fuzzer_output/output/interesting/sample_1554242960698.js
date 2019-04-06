function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337];
const v5 = {get:v2,ownKeys:1337};
const v6 = {from:v5,entries:v5,SQRT2:-536870912,MAX_VALUE:v2,a:v4,includes:v2};
const v8 = [1337,1337,1337,1337];
const v10 = new Int32Array(v6);
const v12 = v10.reverse(v10,1337,1,v8,1);
}
%NeverOptimizeFunction(main);
main();
