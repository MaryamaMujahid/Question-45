let current_Users = ["Iqra", "Riffat", "Ismat", "Rabiia", "Amna"];

let new_Users = ["Maryum", "Riffat", "Fiza", "Iqra", "Saher"];

new_Users.forEach(new_one_user =>{
    let our_condition = current_Users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }
    else {
        console.log(`This Username ${new_one_user} is available`)
    }
})
