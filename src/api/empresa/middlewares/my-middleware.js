module.exports = (config, { strapi }) => {
  return (context, next) => {
    console.log("middleware de empresa, context:: ", context);
  };
};
