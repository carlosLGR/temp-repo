export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const phtosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, phtosResponse]);

    const postJson = await posts.json();
    const photosJson = await photos.json();

    const postAndPhotos = postJson.map((post, index) => {
      return {...post, cover: photosJson[index].url}
    });
    return postAndPhotos;
}