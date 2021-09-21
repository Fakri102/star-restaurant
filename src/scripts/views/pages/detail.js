import UrlParser from '../../routes/url-parser';
import RestaurantListSource from '../../data/restaurantList-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb';

const RestaurantList = {
  async render() {
    return `
    <div class=title-detail>
        <h2>Detail Restaurant</h2>
    </div>
    <div class="restaurant-detail"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantListSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.restaurant-detail');
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
  },
};

export default RestaurantList;
