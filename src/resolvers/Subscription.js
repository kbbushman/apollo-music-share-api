function songsSubscribe(parent, args, context, info) {
  process.nextTick(async () => {
    const songs = await context.prisma.song.findMany();
    context.pubsub.publish('NEW_SONG', songs);
  });
  return context.pubsub.asyncIterator('NEW_SONG');
}

const songs = {
  subscribe: songsSubscribe,
  resolve: (payload) => {
    return payload;
  },
};

module.exports = {
  songs,
};
