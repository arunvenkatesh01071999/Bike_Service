const cors=require('cors');
const express=require('express');
const mydbms=require('mysql');
const bodyparser=require('body-parser');
const fileupload=require('express-fileupload');

const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(fileupload());
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));

const c=mydbms.createConnection({
        host:"localhost",
        user:"root",
        password:"arun9629",
        database:"bikeservice"
})
c.connect(function(error){
    if(error){
        console.log("error");
    }
    else{
        console.log("hi database connected successfully");
    }
})
   
app.post('/Page1',(req,res)=>{
    let name=req.body.name;
    let number=req.body.number;
    let email=req.body.email;
    let password=req.body.password;

    let sql='insert into bikeservice.bikes(name,ph_number,email,password )values(?,?,?,?)';

    c.query(sql,[name,number,email,password],(error,result)=>{
        if(error){
            let s={"status":"error"};
            res.send(s);
        }
        else{
            let s={"status":"inserted"};
            res.send(s);
        }

    })

})
app.post('/Signin',(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    let sql='select * from bikeservice.bikes where email=?';
    c.query(sql,[email],(error,result)=>{
        if(error){
            let s={"status":"error"};
            res.send(s);
        }
        else if(result.length>0){
            let email2=result[0].email;
            let password2=result[0].password;
            let name2=result[0].name;
            if(email === email2 && password === password2){
                let s={"status":"success","name":name2};
                res.send(s);
            }
            else{
                let s={"status":"invalid_data"};
                res.send(s);
            }
        }
        else{
            let s={"status" :"error"};
            res.send(s);
        }
    })
})







app.listen(3007);