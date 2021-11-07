const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    email: {
        type: 'String',
        trim: true,
        required: true,
        lowercase: true
    },
    password: {
        type: 'String',
        trim: true,
        lowercase: true
    },
    fname: {
        type: 'String',
        trim: true,
        default: () => "",
        lowercase: true
    },
    lname: {
        type: 'String',
        trim: true,
        default:  () => "",
        lowercase: true
    },
    gender: {
        type: 'String',
        trime: true,
        default:  () => "",
        lowercase: true
    },
    mobile: {
        type: ['Number'],
    },
    state: {
        type: 'String',
        trim: true,
        default:  () => "",
        lowercase: true,
    },
    city: {
        type: 'String',
        trim: true,
        default:  () => "",
        lowercase: true,
    },
    village: {
        type: 'String',
        trim: true,
        default:  () => "",
        lowercase: true
    },
    district: {
        type: 'String',
        trim: true,
        default:  () => "",
        lowercase: true
    },
    pincode: {
        type: Number,
        default:  () => 000000
    },
    img: {
        type: 'Buffer',
        default:  () => 0
    }
})

module.exports = {
    personSchema
}