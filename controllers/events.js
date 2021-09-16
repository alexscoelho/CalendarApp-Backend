const { response, json } = require("express");
const Evento = require("../models/Evento");

const getEventos = (req, res = response) => {
  return res.status(200).json({
    ok: true,
    msg: "getEventos",
  });
};
const crearEvento = async (req, res = response) => {
  const evento = new Evento(req.body);

  try {
    console.log(req);
    evento.user = req.uid;
    const eventoGuardado = await evento.save();

    res.status(201).json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};
const actualizarEvento = (req, res = response) => {
  return res.status(200).json({
    ok: true,
    msg: "actualizarEvento",
  });
};
const eliminarEvento = (req, res = response) => {
  return res.status(200).json({
    ok: true,
    msg: "eliminarEvento",
  });
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
