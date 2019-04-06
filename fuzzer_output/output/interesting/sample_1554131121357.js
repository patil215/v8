function main() {
const v2 = [13.37,13.37];
const v4 = {ceil:13.37,is:v2,raw:1337};
const v7 = [1337];
v7[1337] = "undefined";
for (let v12 = 0; v12 < 100; v12++) {
    const v14 = v7.push(undefined,v4,-256);
}
}
%NeverOptimizeFunction(main);
main();
