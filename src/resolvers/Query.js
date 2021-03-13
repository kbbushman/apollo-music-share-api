const TEMP_SONGS = [
  {
    id: 1,
    title: 'Song One',
    artist: 'Artist One',
    thumbnail: 'http://example.com',
    url: 'http://example.com',
    duration: 255,
    created_at: 'yesterday',
    updated_at: 'today'
  },
  {
    id: 2,
    title: 'Song Two',
    artist: 'Artist Two',
    thumbnail: 'http://example.com',
    url: 'http://example.com',
    duration: 315,
    created_at: 'yesterday',
    updated_at: 'today'
  }
];

function getSongs(parent, args, context, info) {
  return context.prisma.song.findMany();
}

module.exports = {
  getSongs,
};
