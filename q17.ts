let guestList = ["Sidra","Saher","Iqra","Maria"];

let notCome = guestList[0];

console.log(notCome, "said soory i'm not comming for dinner");

guestList.splice(0, 1 ,"Nadiys");

console.log("Good news ! We have found a bigger table for dinner.")

guestList.unshift("Anmol");

guestList.push("Saba");

let middleIndex: number = Math.floor(guestList.length / 2);

guestList.splice(middleIndex, 0, "Rabia");

console.log("Update list of our guest.");

guestList.forEach(oneGuest => console.log(`Salam ${oneGuest}, Would you like to dinner with me?`));

console.log("Unfortunataly, the new diinnerbtable wont arrive on time, so i can invite only two guest to dinner with me.");

while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(`sorry ${removeGuest}, I can't invite you dinner.`);
}
console.log("Invitation to the last two guests");

guestList.forEach(twoGuest => console.log(`${twoGuest}, Luckly you are still invited to dinner.`));

guestList.pop();
guestList.pop();

console.log("empty List", guestList);
