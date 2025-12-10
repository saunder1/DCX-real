module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets", {
        filter: ["**/*", "!**/*.js"],
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};