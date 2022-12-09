"use strict";

/**
 * empresa controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::empresa.empresa", ({ strapi }) => ({
  async NuevaAccion(ctx) {
    try {
      const today = new Date();
      ctx.body = `hoy es ${today.getDate()}`;
    } catch (error) {
      ctx.body = error;
    }
  },
}));
