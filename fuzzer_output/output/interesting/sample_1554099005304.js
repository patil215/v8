function main() {
const v2 = [13.37];
const v4 = [v2,"*rBqVy//Sg",1337,"*rBqVy//Sg"];
const v5 = {log2:v4,multiline:1337};
Function.__proto__ = Proxy;
Proxy.__proto__ = v5;
}
%NeverOptimizeFunction(main);
main();
