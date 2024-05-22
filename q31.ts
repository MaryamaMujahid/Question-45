let userName = ["Admin", "Maham", "Mehwish", "Mahnoor", "Maha"];

 userName =[];

if(userName.length === 0){
    console.log("your array is empty");
}
else{
    userName.forEach ( oneUser =>{
        if (oneUser === "Admin"){
            console.log(`Hellow ${oneUser}, Would you like to see a status report?`);
        }
        else {
            console.log(`Hellow ${oneUser}, thankyou for logging again.`);
        }
    }
    )
    
}