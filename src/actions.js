const dec = () => ({ type: 'DEC' });

const inc = () => ({ type: 'INC' });

const rnd = () => {
  return { 
    type: 'RND', 
    payload: Math.floor(Math.random()*10),  
  };
};

export {
  dec,
  inc,
  rnd,
};