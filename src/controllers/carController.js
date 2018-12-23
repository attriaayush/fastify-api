const boom = require('boom');

const Car = require('../models/Car');

const getCars = async (req, reply) => {
    try {
        const cars = await Car.find();
        return cars;
    } catch (err) {
        throw boom.boomify(err);
    }
}

const getSingleCar = async (req, reply) => {
    try {
        const id = req.params.id;
        const car = await Car.findById(id);
        return car;
    } catch (err) {
        throw boom.boomify(err);
    }
}

const addCar = async (req, reply) => {
    try {
        const car = new Car(req.id);
        return car.save();
    } catch (err) {
        throw boom.boomify(err);
    }
}

const updateCar = async (req, reply) => {
    try {
        const id = req.params.id;
        const car = req.body;
        const { ...updateData } = car;
        const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
        return update;
    } catch (err) {
        throw boom.boomify(err);
    }
}

const deleteCar = async (req, reply) => {
    try {
        const id = req.params.id;
        const car = await Car.findByIdAndRemove(id);
        return car;
    } catch (err) {
        throw boom.boomify(err);
    }
}

module.exports = {
    getCars: getCars,
    getSingleCar: getSingleCar,
    addCar: addCar,
    updateCar: updateCar,
    deleteCar: deleteCar
}