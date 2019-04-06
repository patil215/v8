function main() {
const v4 = {hasOwnProperty:1337};
const v6 = v4.__proto__;
v6[1337] = 13.37;
const v10 = [Math];
const v12 = [1337,1337];
const v13 = v10.indexOf(Math,-3686643326,v12,13.37,v12);
const v15 = [1337,1337,1337];
const v16 = [v15,13.37,"number",Set];
}
%NeverOptimizeFunction(main);
main();
