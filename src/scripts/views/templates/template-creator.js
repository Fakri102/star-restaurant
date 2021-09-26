import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="card">
<img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="${restaurant.name} image">
  <div class="info">
     <p class="city"><a href="#">${restaurant.city}</a></p>
     <p class="rating"><i class="fa fa-star">    ${restaurant.rating}</i></p> 
  </div>
  <div class="title">
     <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
  </div>
  <div class="body">
     <p class="description">${restaurant.description}</p>
 </div>
</div>
  `;

const createListCategoriesTemplate = (restaurant) => {
  let listCategories = '';
  restaurant.categories.forEach((category) => {
    listCategories += `<a href="#">${category.name}</a>`;
  });
  return listCategories;
};

const createListFoodsTemplate = (restaurant) => {
  let listFoods = '';
  restaurant.menus.foods.forEach((food) => {
    listFoods += `<li class = "food-item">${food.name}</li>`;
  });
  return listFoods;
};

const createListDinksTemplate = (restaurant) => {
  let listDrinks = '';
  restaurant.menus.drinks.forEach((drink) => {
    listDrinks += `<li class = "drink-item">${drink.name}</li>`;
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
  console.log(listCustomerReview);
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
         <p class="rating"><i class="fa fa-star">    ${restaurant.rating}</i></p> 
      </div>
      <h3>${restaurant.name}</h3>
      <p class="address"> Address : ${restaurant.address}</p> 
      <p class="description"> Description: ${restaurant.description}</p> 
      <p class="categories">Categories : ${createListCategoriesTemplate(restaurant)}</p>
   </div>
   <h3 class="menu-title">Menu</h3>
   <div class = "menus-container">
         <div class="foods"> 
         <h3>Foods</h3>    
          <ol class="list"> 
            ${createListFoodsTemplate(restaurant)}
          </ul>
         </div>
         <div class="drinks">    
         <h3>Drinks</h3>   
          <ol class="list">  
            ${createListDinksTemplate(restaurant)}
          </ul>
         </div>
   </div>
   <h3 class="review-title">Users Review</h3>  
   <div class="review-container">
   ${createListUserReviewTemplate(restaurant)}
   </div>
</div>

<div class="card-addReview">
    <h2>Add Review</h2>
    <div class="body">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required/>
      <label for="review">Review</label>
      <textarea id="review" name="review" rows="3" required></textarea>
      <button id="submit-addReview" type="submit"> Add Review </button>
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
