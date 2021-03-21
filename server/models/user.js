import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    apiKeys: [{
        key: String,
        expiresAt: Date,
        
    }],
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var User = mongoose.model('Users', userSchema);

export default User;