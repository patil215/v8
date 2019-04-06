function main() {
const v1 = {hasOwnProperty:1337};
const v3 = v1.__proto__;
v3[1337] = 13.37;
const v7 = [Math];
const v9 = [-4294967296,-4294967296];
const v10 = v7.indexOf(Math,1,v9,13.37,v9);
}
%NeverOptimizeFunction(main);
main();
