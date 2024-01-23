import mongoose, { Schema } from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';


const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //'cloudnary url
            required: true,
        },
        thumbNail: {
            type: String, //'cloudnary url
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number, //'cloudnary url
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },


    },
    { timestamps: true }
);


videoSchema.plugin(mongooseAggregatePaginate)
export const User = mongoose.model('Video', videoSchema);
