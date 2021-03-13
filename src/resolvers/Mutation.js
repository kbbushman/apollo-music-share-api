async function addSong(parent, args, context, info) {
  const newSong = await context.prisma.song.create({
    data: {
      title: args.title,
      artist: args.artist,
      thumbnail: args.thumbnail,
      url: args.url,
      duration: args.duration,
    }
  });

  return newLink;
}

module.exports = {
  addSong,
};
