async function addSong(parent, args, context, info) {
  const newSong = await context.prisma.song.create({
    data: {
      title: args.songInput.title,
      artist: args.songInput.artist,
      thumbnail: args.songInput.thumbnail,
      url: args.songInput.url,
      duration: args.songInput.duration,
    }
  });

  const songs = await context.prisma.song.findMany();

  context.pubsub.publish('NEW_SONG', songs);

  return newSong;
}

module.exports = {
  addSong,
};
