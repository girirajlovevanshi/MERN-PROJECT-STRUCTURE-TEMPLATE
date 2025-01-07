import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        password: {
            type: String,
            required: [true, "password required"]
        },
        refreshToken: {
            type: String,
        },

    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function(next){
    if ( ! this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods().comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods().generateAccessToken = async function () {
    return jwt.sign(
        {
            _id : this._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}
