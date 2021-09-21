import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="card">
<img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name} image">
  <div class="info">
     <p class="city"><a href="#">${restaurant.city}</a></p>
     <p class="rating"> Rating: ${restaurant.rating}</p> 
  </div>
  <div class="title">
     <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
  </div>
  <div class="body">
     <p>${restaurant.description}</p>
 </div>
</div>
  `;

const createListCategoriesTemplate = (restaurant) => {
  let listCategories = '';
  restaurant.categories.forEach((category) => {
    if (restaurant.categories.indexOf(category) === restaurant.categories.length - 1) {
      listCategories += `${category.name}`;
    } else {
      listCategories += `${category.name}, `;
    }
  });
  return listCategories;
};

const createListFoodsTemplate = (restaurant) => {
  let listFoods = '';
  restaurant.menus.foods.forEach((food) => {
    listFoods += `<p class = "foods">${food.name}</p>`;
  });
  return listFoods;
};

const createListDinksTemplate = (restaurant) => {
  let listDrinks = '';
  restaurant.menus.drinks.forEach((drink) => {
    listDrinks += `<p class = "drinks">${drink.name}</p>`;
  });
  return listDrinks;
};

const createListUserReviewTemplate = (restaurant) => {
  let listCustomerReview = '';
  restaurant.customerReviews.forEach((customerReview) => {
    listCustomerReview
      += `<div class="review-item">
      <h4>${customerReview.name}</h4>
      <p>${customerReview.review}</p>
      <p>${customerReview.date}</p>
      </div>`;
  });
  return listCustomerReview;
};

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail-container">
   <div class="image">
      <img src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="${restaurant.name} image">
   </div>
   <div class="info-container">
      <div class="head">
         <p class="city"><a href="#">${restaurant.city}</a></p>
         <p class="rating"> Rating: ${restaurant.rating}</p> 
      </div>
      <h3>${restaurant.name}</h3>
      <p class="address"> Address : ${restaurant.address}</p> 
      <p class="categories"> Categories : ${createListCategoriesTemplate(restaurant)}</p> 
      <p class="description"> Description: ${restaurant.description}</p> 
   </div>
   <h3 class="menu-title">Menu</h3>
   <div class = "menus-container">
         <div class="foods"> 
         <h3>Foods</h3>     
            ${createListFoodsTemplate(restaurant)}
         </div>
         <div class="drinks">    
         <h3>Drinks</h3>    
            ${createListDinksTemplate(restaurant)}
         </div>
   </div>
   <h3 class="review-title">Users Review</h3>  
   <div class="review-container">
   ${createListUserReviewTemplate(restaurant)}
   </div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
