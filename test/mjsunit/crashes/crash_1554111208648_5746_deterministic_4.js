// Flags: --allow-natives-syntax

function main() {
function v0(v1,v2,v3,v4) {
    let v6 = "undefined";
    for (const v7 in v6) {
        const v9 = [13.37];
        let v11 = v9;
        const v12 = v11.indexOf();
        Math[-3137023911] = v12;
        for (let v16 = 0; v16 < 100; v16++) {
        }
    }
}
const v17 = v0();
}
%NeverOptimizeFunction(main);
main();
