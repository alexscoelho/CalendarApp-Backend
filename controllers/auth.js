const { response, json } = require("express");
const Usuario = require("../models/Usuario");

const crearUsuario = async (req, res = response) => {
  const { name, email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Un usuario Existe con ese correo",
      });
    }

    usuario = new Usuario(req.body);
    await usuario.save();

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: true,
      msg: "Por favor hable con el administrador",
    });
  }
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  res.status(200).json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
