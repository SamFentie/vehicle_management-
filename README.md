Zero
+ Dynamic Table with serach
+ New Vehicle
+ New Vehicle and edit existing vehicle
+ API completed
+ Tooltip


How to?

The Database is implimented using prisma ORM so you can use any database at the back including mongog.mssql,mysql...

1) npm i                             >> for installing all the modules
   
2) creating .env file with   DATABASE_URL="mysql://[user_name]:[password]@[host]:[port]/[databasename]"     replace all with in the square braket
   example: DATABASE_URL="mysql://root:Test123!@localhost:3306/vms"
                 
3) npx prisma db push                >> for creating database scheme
4) npm run dev                       >> for development
5) npm run start                     >> for production
