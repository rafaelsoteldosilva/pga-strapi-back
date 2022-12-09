"use strict";

/**
 * empresa service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::empresa.empresa", ({ strapi }) => ({
  async miServicio(...args) {
    console.log("Este servicio ha sido usado");
  },
}));
