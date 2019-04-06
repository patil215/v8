function main() {
const v3 = [13.37,13.37];
const v4 = {apply:-2147483648,setPrototypeOf:"number",call:13.37};
const v6 = new Proxy(v3,v4);
delete v6.setUint32;
}
%NeverOptimizeFunction(main);
main();
