import UrlParser from '../../routes/url-parser';
import RestaurantListSource from '../../data/restaurantList-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb';
import PostReview from '../../utils/post-review';
import Spinner from '../templates/Spinner';

const RestaurantList = {
  async render() {
    return `
    <div class=title-detail>
        <h2>Detail Restaurant</h2>
    </div>
    <div class="restaurant-detail"></div>
    <div id="loading"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('.restaurant-detail');
    const loading = document.querySelector('#loading');
    restaurantContainer.style.display = 'none';
    loading.innerHTML = Spinner;

    const restaurant = await RestaurantListSource.detailRestaurant(url.id);
    loading.style.display = 'none';
    restaurantContainer.style.display = 'block';
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });

    const btnSubmitReview = document.querySelector('#submit-addReview');
    const nameInput = document.querySelector('#name');
    const reviewInput = document.querySelector('#review');

    btnSubmitReview.addEventListener('click', async (e) => {
      e.preventDefault();

      await PostReview(url, nameInput.value, reviewInput.value);

      nameInput.value = '';
      reviewInput.value = '';
    });
  },
};

export default RestaurantList;
