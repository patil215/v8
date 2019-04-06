function main() {
const v1 = [13.37,13.37];
const v3 = {ceil:13.37,is:v1,raw:1337};
const v7 = [1337];
v7[1337] = "undefined";
for (let v13 = 0; v13 < 100; v13++) {
    let v15 = undefined;
    const v16 = v7.push(undefined,v3,9007199254740991);
}
}
%NeverOptimizeFunction(main);
main();
