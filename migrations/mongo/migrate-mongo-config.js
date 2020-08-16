const config = {
  mongodb: {
    url: "mongodb://admin:admin@127.0.0.1:27017/posts?authSource=admin",

    options: {
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
    }
  },

  migrationsDir: "migrations",

  changelogCollectionName: "changelog",

  migrationFileExtension: ".js"
};

module.exports = config;
