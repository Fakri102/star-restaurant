const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('.favorite-restaurant-list');
  I.see('Favorite restaurant is empty', '.favorite-restaurant-list');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Favorite restaurant is empty', '.favorite-restaurant-list');

  I.amOnPage('/');
  I.seeElement('.card .title h3 a');
  const firstRestaurant = locate('.card .title h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom('.card .title h3 a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  // liking one restaurant
  I.amOnPage('/');
  I.seeElement('.card .title h3 a');
  const firstRestaurant = locate('.card .title h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // unliking one restaurant
  I.amOnPage('/#/like');
  I.seeElement('.card .title h3 a');
  const firstFavoriteRestaurantTitle = await I.grabTextFrom('.card .title h3 a');
  I.click(firstFavoriteRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.see('Favorite restaurant is empty', '.favorite-restaurant-list');
});
