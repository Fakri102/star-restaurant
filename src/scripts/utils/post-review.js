import RestaurantListSource from '../data/restaurantList-source';

const PostReview = async (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  const reviewContainer = document.querySelector('.review-container');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
    <div class="review-item">
      <h4>${name}</h4>
      <p>${review}</p>
      <p>${date}</p>
      </div>
  `;

  console.log(dataInput);
  // POST review
  const reviewResponse = await RestaurantListSource.postRestaurantReview(dataInput);
  console.log(reviewResponse);

  if (dataInput.name !== '' && dataInput.review !== '') {
    reviewContainer.innerHTML += newReview;
  }
};

export default PostReview;
