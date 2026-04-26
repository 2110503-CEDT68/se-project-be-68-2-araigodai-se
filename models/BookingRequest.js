const mongoose = require('mongoose');

const BookingRequestSchema = new mongoose.Schema({
    booking: {
        type: mongoose.Schema.ObjectId,
        ref: 'Booking',
        required: true
    },
    type: {
        type: String,
        enum: ['edit', 'delete'],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    requestedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    
    adminReason: {
        type: String,
        default: null
    },

    // ใช้เมื่อ type = "edit"
    newCheckInDate: {
        type: Date,
        default: null
    },
    newNumberOfNights: {
        type: Number,
        min: [1, 'Number of nights must be at least 1'],
        max: [3, 'Number of nights cannot exceed 3'],
        default: null
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('BookingRequest', BookingRequestSchema);