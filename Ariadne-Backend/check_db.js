const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Use the .env from the backend
dotenv.config({ path: path.join(__dirname, '..', 'Ariadne-Backend', '.env') });

async function checkUsers() {
    try {
        await mongoose.connect(process.env.DB_URL);
        const users = await mongoose.connection.db.collection('users').find({}).toArray();
        console.log('Users found in DB:');
        users.forEach(u => console.log(`- ${u.email} (${u.name})`));
        await mongoose.disconnect();
    } catch (err) {
        console.error(err);
    }
}

checkUsers();
