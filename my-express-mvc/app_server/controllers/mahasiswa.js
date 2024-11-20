const Mahasiswa = require('../models/mahasiswa');

exports.index = async (req, res) => {
    const mahasiswa = await Mahasiswa.find();
    res.json(mahasiswa);
};

exports.insert = async (req, res) => {
    const newMahasiswa = new Mahasiswa(req.body);
    await newMahasiswa.save();
    res.status(201).json(newMahasiswa);
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const updatedMahasiswa = await Mahasiswa.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedMahasiswa);
};

exports.show = async (req, res) => {
    const { id } = req.params;
    const mahasiswa = await Mahasiswa.findById(id);
    res.json(mahasiswa);
};

exports.destroy = async (req, res) => {
    const { id } = req.params;
    await Mahasiswa.findByIdAndDelete(id);
    res.status(204).send();
};
