// "Base de datos" en memoria
let pokedex = [];

const list = (req, res) => {
  // 👇 Aquí enviamos la variable pokedex a la vista
  res.render("pokedex", { pokedex });
};

const save = (req, res) => {
  const { nombre, tipo, peso, shiny, oscuro, imagen } = req.body;

  // Agregamos el nuevo registro al array
  pokedex.push({
    nombre,
    tipo,
    peso,
    shiny,
    oscuro,
    imagen
  });

  // Redirigimos a la lista
  res.redirect("/pokedex");
};

module.exports = { list, save };
