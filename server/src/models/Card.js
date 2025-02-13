import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CardSchema = new Schema(
    {
        name: { type: String, required: true },
        digits: { type: String, required: true },
        cvv: { type: Number, },
        dob: { type: String },
        pin: { type: Number },
        notes: { type: String },
        creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

CardSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true,
    ref: 'Profile'
})
