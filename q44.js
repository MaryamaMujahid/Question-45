function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sendwich with the following items\n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nNow enjoy sendwich");
}
make_sandwich("Chicken", "Cheese", "Egg", "Mayo");
make_sandwich("Bread", "Butter");
make_sandwich("Bread", "Butter", "Mayo", "Tomato", "Cheese", "Chicken");
