function main() {
const v1 = [2506394673,2506394673,2506394673,2506394673];
const v4 = new Int32Array(1337);
const v6 = v4.fill(v4,2506394673,1,v1,1);
const v9 = new Uint16Array(v6,1337);
}
%NeverOptimizeFunction(main);
main();
