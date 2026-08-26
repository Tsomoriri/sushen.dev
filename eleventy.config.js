export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("_ds");
  eleventyConfig.addPassthroughCopy("support.js");
  eleventyConfig.addPassthroughCopy("ds-base.js");

  eleventyConfig.addFilter("htmlDate", (value) => {
    const date = value instanceof Date ? value : new Date(`${value}T00:00:00Z`);
    return new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "UTC"
    }).format(date);
  });

  eleventyConfig.addCollection("desk", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/content/desk/*.md")
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
  );

  eleventyConfig.addCollection("notes", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/content/notes/*.md")
      .filter((item) => !item.data.draft)
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
