module.exports = {
  routes: [
    {
      method: "GET",
      path: "/myruta",
      handler: "empresa.NuevaAccion",
      config: {
        auth: false,
      },
    },
  ],
};
