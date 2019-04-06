function main() {
const v5 = !13.37;
const v6 = [2];
const v8 = {};
const v9 = [v8,v8,v8,v8];
const v10 = {getFloat32:v6,__proto__:v9,flags:2,ownKeys:v5};
}
%NeverOptimizeFunction(main);
main();
