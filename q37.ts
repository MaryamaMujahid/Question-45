function make_shirt(size: string = "Large", printMessage: string = "I Love TypeScript"){
    console.log(`creating ${size} shirt with a ${printMessage} print on shirt`);
}
make_shirt();

make_shirt("Medium");

make_shirt("Small", "I Love JavaScript");