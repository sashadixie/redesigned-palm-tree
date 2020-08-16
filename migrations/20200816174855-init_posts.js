module.exports = {
  async up(db, client) {
    await db.collection('posts').insertOne(
      { title: "initial post", content: "silence is golden"}
    );
  },

  async down(db, client) {
    await db.collection('posts').deleteMany(
      { title: { $ne : null }}
    );
  }
};
