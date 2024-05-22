function show_magistians(magistians: string[]){
    magistians.forEach(name =>console.log(name));
}
function make_great(magistians: string[]){
    return magistians.map(name =>`The Great ${name}`);

}
let magistians_name =["Herry potter", "Sherry Potter", "kerry Potter"]

let magistians_great = make_great(magistians_name)
console.log (magistians_great);
