function create_Bigcar(manufacture, model, ...options){
    let car ={
        Manufacturer: manufacture,
        Model: model
    };
    options.forEach(option => {
        let [key, value]= option.split(":");
        car.[key.trim()] = value.trim();
    });
    return car;
} 
let my_car =create_Bigcar("toyota", "corola", "balck:color", "sunroof:true" );
console.log(my_car);

