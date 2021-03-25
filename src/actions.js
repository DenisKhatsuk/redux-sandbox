const dec = () => ({ type: 'DEC' });

const inc = () => ({ type: 'INC' });

const rnd = (payload) => ({ type: 'RND', payload });

export {
  dec,
  inc,
  rnd,
};