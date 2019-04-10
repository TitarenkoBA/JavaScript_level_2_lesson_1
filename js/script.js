const goods = [
  { title: 'Chappi', price: 150, rating: 1, url: 'img/goods/1.jpg' },
  { title: 'Simba', price: 50, rating: 10, url: 'img/goods/2.jpg' },
  { title: 'Darsi', price: 350, rating: 4, url: 'img/goods/3.jpg' },
  { title: 'Unicharm', price: 250, rating: 8, url: 'img/goods/4.jpg' },
  { title: 'Royal Farm', price: 250, rating: 7, url: 'img/goods/5.jpg' },
  { title: 'Pedigree', price: 250, rating: 5, url: 'img/goods/6.jpg' },
  { title: 'Pro Plan', price: 250, rating: 6, url: 'img/goods/7.jpg' }
];

const renderGoodsItem = (title = 'unknown', price = 999, rating = 0, url = 'img/goods/1.jpg') => {
  return `<div class="goods-item"><img class="good-img" src=${url}><h3>${title}</h3><p>${price}</p><h4>${rating}</h4></div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.rating, item.url));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);
