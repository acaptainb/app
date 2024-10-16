import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const BHSSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        account: { type: String, required: true },
        pass: { type: String, },
        class: { type: String },
        creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

BHSSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true,
    ref: 'Profile'
})
