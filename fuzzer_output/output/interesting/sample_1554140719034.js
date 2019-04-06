function main() {
const v1 = {};
const v5 = [13.37,13.37,13.37,13.37,13.37];
const v7 = [1337,1337,1337,1337];
const v8 = {max:1337,MIN_VALUE:"undefined",sqrt:1337,charAt:1,reverse:v7,entries:v5};
const v10 = "undefined".__proto__;
const v11 = [];
v10[10] = v11;
const v12 = {...v8,...13.37,...v1,...v10};
}
%NeverOptimizeFunction(main);
main();
