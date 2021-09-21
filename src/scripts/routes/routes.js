import RestaurantList from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': RestaurantList,
  '/restaurant-list': RestaurantList,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
