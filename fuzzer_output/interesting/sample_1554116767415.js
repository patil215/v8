function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [];
const v5 = {revocable:13.37,tanh:1337,pop:1337,defineProperty:v4,length:1337,match:v2,join:13.37,codePointAt:v2,fromCodePoint:Object};
const v6 = [v5];
for (let v14 = 0; v14 < 100; v14++) {
    let v16 = undefined;
    for (const v17 of v6) {
        const v19 = v17 + 1337;
        const v20 = [v19,13.37,13.37,13.37];
        delete v20[0];
    }
}
}
%NeverOptimizeFunction(main);
main();
