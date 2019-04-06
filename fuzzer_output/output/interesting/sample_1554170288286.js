function main() {
const v1 = [4294967295,4294967295,4294967295,4294967295,4294967295];
const v3 = [13.37];
const v6 = new Int16Array(v1,8154,v3);
const v10 = [13.37,13.37,1];
const v12 = [1337,1337,1337,1337];
const v13 = [v12,v12,13.37];
const v14 = {toLocaleLowerCase:v13,includes:v10,values:v12,NaN:v13,tanh:"number",leftContext:v13};
for (let v18 = 0; v18 < 100; v18++) {
    const v23 = [9007199254740993,9007199254740993,9007199254740993,9007199254740993,-2.220446049250313e-16];
    const v24 = new Uint16Array(v23,1337);
    const v25 = v24.fill(v18,v10,v14);
}
}
%NeverOptimizeFunction(main);
main();
