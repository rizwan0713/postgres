import { Client } from "pg";

const pgClient = new Client({
    user:"neondb_owner",
    password:"npg_hnq8K5IokQOG",
    host:"ep-nameless-lake-a47m9irz-pooler.us-east-1.aws.neon.tech",
    database:"neondb",
    port:5432,
})

async function main () {

await pgClient.connect()
const response = await pgClient.query("SELECT * FROM user;")
console.log("response is : ",response)

}

main()