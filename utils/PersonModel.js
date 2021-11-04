const mongoose = require('mongoose');
const validator = require('validator');

const personSchema = new mongoose.Schema({
    email: {
        type: 'String',
        trim: true,
        required: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!')
            }
        }
    },
    password: {
        type: 'String',
        trim: true,
        lowercase: true
    },
    fname: {
        type: 'String',
        trim: true,
        default: () => "default",
        lowercase: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('First name is invalid!')
            }
        }
    },
    lname: {
        type: 'String',
        trim: true,
        default:  () => "default",
        lowercase: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('Last name is invalid!')
            }
        }
    },
    gender: {
        type: 'String',
        trime: true,
        default:  () => "default",
        lowercase: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('Gender is invalid!')
            }
        }
    },
    mobile: {
        type: ['Number'],
    },
    state: {
        type: 'String',
        trim: true,
        default:  () => "default",
        lowercase: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('State is invalid!')
            }
        }
    },
    city: {
        type: 'String',
        trim: true,
        default:  () => "default",
        lowercase: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('City is invalid!')
            }
        } 
    },
    village: {
        type: 'String',
        trim: true,
        default:  () => "default",
        lowercase: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('Village is invalid!')
            }
        } 
    },
    district: {
        type: 'String',
        trim: true,
        default:  () => "default",
        lowercase: true,
        validate(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('District is invalid!')
            }
        } 
    },
    pincode: {
        type: Number,
        default:  () => 121006,
        validate(value) {
            if (!validator.isNumeric(value.toString())) {
                throw new Error('Pincode is invalid!')
            }
        }
    },
    img: {
        type: 'Buffer',
        default:  () => 0
    }
})

module.exports = {
    personSchema
}