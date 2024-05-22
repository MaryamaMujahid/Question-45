let userName = ["Admin", "Maham", "Mehwish", "Mahnoor", "Maha"];

userName.forEach ( oneUser =>{
    if (oneUser === "Admin"){
        console.log(`Hellow ${oneUser}, Would you like to see a status report?`);
    }
    else {
        console.log(`Hellow ${oneUser}, thankyou for logging again.`);
    }
}
)

