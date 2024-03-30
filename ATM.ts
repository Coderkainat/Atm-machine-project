import { match } from "assert";
import inquirer from "inquirer";
import { ArgumentOutOfRangeError } from "rxjs";

interface anstype {
    userId :string,
    userPin :number,
    AccountType:string,
    amount: number,

}

const answers: anstype = await inquirer.prompt([
    { type:"input",
      name:"userId",
      message:"kindly enter your id:"
       
    },
    {
        type:"number",
        name:"userPin",
        message:"kindly enter your pin:"
    },
         {
        type:"list",
        name:"accountType",
        choices:["current", "saving"],
        message:"please select your account type"

    },
    {
        type:"list",
        name:"transactionType",
        choices:["fast cash", "withdrawl"],
        message:"select your transaction",
        when(answers){
            return answers.AccountType == "current";

        }
 },
   
       
    
    
    {
        type:"number",
        name:"amount",
        choices:[1000,2000,30000],
        message:"select your amount",
        when(answers){
            return answers.transactionType=="fast cash";
        }
    },
        
        {
            type:"number",
            name:"amount",
            message:"enter your withdrawl amount",
            when(answers){
                return answers.transactionType == "withdrawl"
            }
        }
    
])
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random () * 1000);
    console.log("current balance:",balance);
     
    const enteredAmount = answers.amount;
    if (balance >= enteredAmount)
    {
        console.log("insufficient balance");
    }
    else{
        const remaining = balance-enteredAmount;
        console.log("your remaining balance is",remaining);
    }

    
}


