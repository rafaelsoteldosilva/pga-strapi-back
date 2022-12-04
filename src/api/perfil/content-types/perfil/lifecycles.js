const { ForbiddenError } = require("@strapi/utils").errors;

module.exports = {
  async beforeCreate(event) {
    let stopCreation = false;
    const { data, where, select, populate } = event.params;
    let companyEntry, usuarioEntry;
    console.log("data.empresa:: ", data.empresa);
    try {
      perfilEntry = await strapi.entityService.findMany("api::perfil.perfil", {
        filters: {
          empresa: data.empresa,
        },
        populate: "*",
      });
      console.log("perfilEntry.usuario:: ", perfilEntry[0].usuario.nombre);
      if (perfilEntry.length > 0) {
        stopCreation = true;
      } else {
        // usuarioEntry = await strapi.entityService.findMany(
        //   "api::usuario.usuario",
        //   {
        //     filters: {
        //       empresa: perfil,
        //     },
        //   }
        // );
      }
    } catch (error) {
      console.log(error);
      return error;
    }
    if (stopCreation) {
      throw new ForbiddenError(
        `Ese perfil ya está tomado por ${perfilEntry[0].usuario.nombre}, por favor elija otro`
      );
    }
  },
};

// strapi.db.lifecycles.subscribe((event) => {
//   if (event.action === "beforeCreate") {
//     throw new ForbiddenError("Some message you want to show in the admin UI");
//   }
// });
