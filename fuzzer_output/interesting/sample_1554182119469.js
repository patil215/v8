function main() {
const v4 = [13.37,13.37,13.37,13.37,1000];
const v6 = [1337];
const v7 = [1000,v6,Error];
const v8 = {clz32:1337,asin:13.37,unicode:1000,setInt32:"undefined",finally:v7,then:1000,acos:Error,setPrototypeOf:Error};
const v9 = {asin:v8,finally:1337,prototype:1000,match:v4,getOwnPropertyNames:Error,reverse:v6,toPrecision:v4};
const v11 = [1337];
v9.__proto__ = v11;
for (let v15 = 0; v15 < 100; v15++) {
    const v17 = v11.unshift(3,v15);
}
}
%NeverOptimizeFunction(main);
main();
