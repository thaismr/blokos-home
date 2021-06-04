const data = {
    posts: [
      {
        id: 10,
        name: 'Strawberries',
        description: '16oz package of fresh organic strawberries',
        quantity: '1',
      },
      {
        id: 20,
        name: 'Sliced bread',
        description: 'Loaf of fresh sliced wheat bread',
        quantity: 1,
      },
      {
        id: 30,
        name: 'Apples',
        description: 'Bag of 7 fresh McIntosh apples',
        quantity: 1,
      },
    ],
  };
  
  const getRandomInt = () => {
    const max = 1000;
    const min = 100;
    return Math.floor(Math.random() * Math.floor(max) + min);
  };
  
  const addPost = (post) => {
    post.id = getRandomInt();
    data.posts.push(post);
    return post;
  };

  const getPosts = () => {
    return data.posts;
  };
  
  module.exports = { addPost, getPosts };
  