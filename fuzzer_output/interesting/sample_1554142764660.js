function main() {
const v4 = [2729346598,2729346598,2729346598];
v4.length = 1;
v4[2] = 13.37;
}
%NeverOptimizeFunction(main);
main();
