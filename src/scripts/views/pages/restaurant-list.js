import RestaurantListSource from '../../data/restaurantList-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import Spinner from '../templates/Spinner';

const RestaurantList = {
  async render() {
    return `
    <div class=title-content>
      <h2>List Restaurant</h2>
    </div>
    <div class="restaurant-list">
    </div>    
     <div id="loading"></div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.restaurant-list');
    const loading = document.querySelector('#loading');
    restaurantsContainer.style.display = 'none';
    loading.innerHTML = Spinner;

    const restaurants = await RestaurantListSource.restaurantList();
    loading.style.display = 'none';
    restaurantsContainer.style.display = 'grid';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
