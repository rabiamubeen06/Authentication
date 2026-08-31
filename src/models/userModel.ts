import mongoose  from "mongoose"

export interface IUser extends mongoose.Document{
    username:string,
    password:string,
    email:string,
    isVerified:boolean,
    isAdmin:boolean,
    forgotPasswordToken?:string,
    forgotPasswordTokenExpiry?:Date,
    verifiedToken?:string,
    verifiedTokenExpiryToken?:Date,

}
const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,

    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    email:{
        type:String,
        required:[true, "Please provide an email"],
        unique:true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifiedToken: String,
    verifiedTokenExpiryToken: Date,

})
const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;