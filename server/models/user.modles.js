import mongoose from mongoose;

const userSchema = new mongoose.Schmea({
    fullname : {
        type:String,
        required : true
    },
    email: {
        type:String,
        required : true,
        unique:true
    },
    password: {
        type:String,
        required : true
    },
}, {timestamps:true});

export const  USer = mongoose.model('User', userSchema);