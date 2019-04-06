function main() {
const v1 = {};
const v5 = [13.37,13.37,13.37,13.37,13.37];
const v7 = [1337,1337,1337,1337];
const v8 = {max:1337,MIN_VALUE:"undefined",sqrt:1337,charAt:1,reverse:v7,entries:v5};
const v10 = "undefined".__proto__;
v8.filter = v1;
const v11 = {...v8,...13.37,...v1,...v10};
}
%NeverOptimizeFunction(main);
main();
