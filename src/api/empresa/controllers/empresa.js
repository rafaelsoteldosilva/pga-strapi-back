"use strict";

const empresa = require("../services/empresa");

/**
 * empresa controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::empresa.empresa", ({ strapi }) => ({
  async NuevaAccion(ctx) {
    try {
      await strapi.service("api::empresa.empresa").miServicio();
      const today = new Date();
      ctx.body = `hoy es ${today.getDate()}`;
    } catch (error) {
      ctx.body = error;
    }
  },
}));
