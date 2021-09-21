import RestaurantListSource from '../../data/restaurantList-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
    <div class=title-content>
      <h2>List Restaurant</h2>
    </div>
    <div class="restaurant-list">
    
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantListSource.restaurantList();
    const restaurantsContainer = document.querySelector('.restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
