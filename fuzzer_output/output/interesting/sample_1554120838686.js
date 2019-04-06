function main() {
const v6 = [13.37,13.37,13.37,13.37];
const v8 = [1337,1337,1337,1337,1337];
const v9 = {hasOwnProperty:1337};
const v10 = {atan2:13.37,pow:v9,NEGATIVE_INFINITY:-3421226912,exp:-3421226912,for:1337,race:v8,flags:Function,hypot:v6};
const v13 = Error(-2040685448);
v10[v13] = 100;
}
%NeverOptimizeFunction(main);
main();
