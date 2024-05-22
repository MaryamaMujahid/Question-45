let guestList = ["Sidra","Saher","Iqra","Maria"];

let notCome = guestList[0];

console.log(notCome, "said soory i'm not comming for dinner");

guestList.splice(0, 1 ,"Nadiys");

guestList.forEach (guest => console.log(`Salam ${guest}, Would you like to dinner with me?`));