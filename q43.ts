function show_magistians(magistians: string[]){
    magistians.forEach(name =>console.log(name));
}
function make_great(magistians: string[]){
    return magistians.map(name =>`The Great ${name}`);

}
let magistians_name =["Herry potter", "Sherry Potter", "kerry Potter"]

let magistians_copy = magistians_name.slice()

let copy_great_magistians = make_great(magistians_copy);
show_magistians(magistians_name);
show_magistians(copy_great_magistians);