const db = require('../models');

module.exports = {
  addSong: async (args, req) => {
    const { title, artist, thumbnail, url, duration } = args.songInput;
    try {
      const song = await db.Song.create({title, artist, thumbnail, url, duration});
      return { ...song._doc, _id: song._id.toString() };
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong. Please try again');
    }
  },
  getSongs: async (args, req) => {
    try {
      const songs = await db.Song.find();
      return songs;
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong. Please try again');
    }
  }
}
