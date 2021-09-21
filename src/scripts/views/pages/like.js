import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
    <div class=title-content>
      <h2>List Favorites</h2>
    </div>
    <div class="favorite-restaurant-list">
    
    </div>
    `;
  },

  async afterRender() {
    const favoriteRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const favoriteRestaurantsContainer = document.querySelector('.favorite-restaurant-list');

    if (favoriteRestaurants.length === 0) {
      favoriteRestaurantsContainer.innerHTML = `
      <p style="font-size:24px; font-weigth: bold;">Favorite restaurant is empty</p>
      `;
    }

    favoriteRestaurants.forEach((restaurant) => {
      favoriteRestaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
