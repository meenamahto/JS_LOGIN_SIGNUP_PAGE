console.log("___WELCOME IN LOGIN AND SIGNUP PAGE___")
function signup(passward){
    if(passward.length>=6 && passward.length<=16){
        if(passward>="a" || passward<="z" || passward>="A" || passward<="Z" ){
            if(passward.includes("@") || passward.includes("#")){
                console.log("strong")
            }else{
                console.log("Add spacial charater")
                const rs=require("readline-sync");
                var passward=rs.question("Enter your passward again:");
                signup(passward)

            }
        }else{
            console.log("Add alphabets")
            const rs=require("readline-sync");
            var passward=rs.question("Enter your passward again:");
            signup(passward)
        }
    }else{
        console.log("please check the lenght of passward, atleast 6 and maximum 16.")
        const rs=require("readline-sync");
        var passward=rs.question("Enter your passward again:");
        signup(passward)
    }
}
function confirm_passward(passward,con_passward){
    if(passward==con_passward){
        console.log("correct")
    }else{
        console.log("your confirm passward is not match with passward.")
        const rs=require("readline-sync");
        var con_passward=rs.question("Enter your confirm passward:");
    }
}

const rs=require("readline-sync");
var user=rs.question("What do you want login or signup:");
const fs=require("fs");
var file=fs.existsSync("signup.json");
if(file==false){
    if(user=="signup"){
        var name=rs.question("Enter your Full name:");
        var passward=rs.question("Enter your strong passward:");
        signup(passward)
        var con_passward=rs.question("Enter your Confirm passwar:");
        confirm_passward(passward,con_passward)
        console.log(`congrates ${name} you signed-up successfully!`)
        var dob=rs.question("Enter your Date of birth:");
        var gender=rs.question("Enter your Gender:");
        var discription=rs.question("Enter your Discription:");
        var final_list=[],dict={};
        var list1=["Name","Passward","D.O.B","Gender","Discription"];
        var list2=[name,passward,dob,gender,discription];
        for (let i in list1){
            dict[list1[i]]=list2[i]
        }
        final_list.push(dict)
        fs.writeFileSync("signup.json",JSON.stringify(final_list,null,4))
    }
}else if(file==true){
    if(user=="signup"){
        var name=rs.question("Enter your Full name:");
        var passward=rs.question("Enter your strong passward:");
        signup(passward)
        var con_passward=rs.question("Enter your Confirm passwar:");
        confirm_passward(passward,con_passward)
        var data=fs.readFileSync("signup.json");
        if (data.includes(name)){
            console.log("name is already exist!")
        }else{
            console.log(`congrates ${name} you signed-up successfully!`)
            var dob=rs.question("Enter your Date of birth:");
            var gender=rs.question("Enter your Gender:");
            var discription=rs.question("Enter your Discription:");
            var final_list=[],dict={};
            var list1=["Name","Passward","D.O.B","Gender","Discription"];
            var list2=[name,passward,dob,gender,discription];
            var list1=["Name","Passward","D.O.B","Gender","Discription"];
            var list2=[name,passward,dob,gender,discription];
            var dict1={};
            for (let i in list1){
                dict1[list1[i]]=list2[i]
            }
            var data=fs.readFileSync("signup.json")
            var data=JSON.parse(data)
            data.push(dict1)
            fs.writeFileSync("signup.json",JSON.stringify(data,null,4))
        }
    }else if(user=="login"){
        var user_name=rs.question("Enter your name:");
        var user_passward=rs.question("Enter your passward:");
        var data=fs.readFileSync("signup.json");
        var data=JSON.parse(data);
        for (let i in data){
            if(user_name==data[i]["Name"]){
                if(user_passward==data[i]["Passward"]){
                    console.log("\nLogin successfuly !\n")
                    console.log(`Your name is ${data[i]["Name"]}\nYour Full informations are given below:-\n`)
                    for (let j in data[i]){
                        console.log(`${j}=${data[i][j]}`)
                    }
                } else{
                    console.log("Sorry this name is not exist in file")
                    break
                }
            }
            
        }
    }
}
