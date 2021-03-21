import mongoose from 'mongoose';

const interactiveSessionSchema = mongoose.Schema({
    userId: String,
    interactiveId: String,
    startedAt: {
        type: Date,
        default: new Date(),
    },
    endedAt:{
        type: Date
    }
})

var InteractiveSession = mongoose.model('InteractiveSession', interactiveSessionSchema);

export default InteractiveSession;