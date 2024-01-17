const express = require("express")
const app = express();
const port = 5000;
var cors = require('cors')
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');
app.use(express.json())

app.use(cors());

const uri = "mongodb+srv://mydbuser1:2cKuKzwaTjiLcbcl@cluster0.5d0ua.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const jwtSecretToken = "secretkey@#$%^&*()_+djfsfj";



async function main() {

    try {

        await client.connect()
        const database = client.db("user");
        console.log(database)
        const coll = database.collection("user_data")
        console.log(coll)

        //This is Registration System
        app.post("/register", async (req, res) => {

            // const newUser = req.body;
            const hashPassword = await bcrypt.hash(req.body.password, 10)
            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: hashPassword
            }
            console.log(newUser)

            const result = await coll.insertOne(newUser)


            res.json(result)

        })


        // const {email,password,usename}=req.body;
        //This is login system
        app.post("/login", async (req, res) => {
            // const password= compareSync(password, req.body.password)
            const { password } = req.body
            try {

                const loginUser = {
                    email: req.body.email,
                    //    password:req.body.password
                }


                const user = await coll.findOne(loginUser)
                console.log(user)
                console.log(user.password);
                if (!user) {
                    return res.status(400).send({
                        success: false,
                        message: "user does not found"
                    })
                }
                // const result = await bcrypt.compare(providedPassword, storedHashedPassword);
                const matchPassword = await bcrypt.compare(password, user.password)
                console.log("password id match", matchPassword)
                if (matchPassword) {

                    const token = jwt.sign({ email: user.email, expire:"1day" }, jwtSecretToken)
                    res.send({
                        success: true,
                        message: "Login Succesful",
                        token: token,
                        user: user

                    })
                }else{
                    return res.send(
                        {
                            success:false,
                            message:true
                        }
                    )
                }
            }

            catch (error) {
                return res.send({
                    success: false,
                    error: error,
                    message: error.message,
                })
            }



        })
    }


    finally {
        // await client.close();
    }
}

main().catch(console.error);


app.get("/", (req, res) => {

    res.send("Heloo world this is send ")

})



app.listen(port, () => {

    console.log(`server is running ${port}`)
})



//  user_name =user
//  user_pwd=VfUmoBVL16N3jv7H



// app.js
// ...

// Dashboard route
app.get('/dashboard', (req, res) => {
    // Add authentication check here to ensure only authenticated users can access the dashboard.
    res.sendFile(__dirname + '/public/dashboard.html');
});






