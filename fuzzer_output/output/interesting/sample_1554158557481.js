function main() {
const v2 = {get:String,__proto__:String};
const v4 = Object.defineProperty(String,"startsWith",v2);
}
%NeverOptimizeFunction(main);
main();
