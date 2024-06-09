var canPlaceFlowers = function (flowerbed, n) {
	for (let i = 0; i < flowerbed.length; i++) {
		if (
			flowerbed[i] === 0 &&
			(flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) &&
			(flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)
		) {
			flowerbed[i] = 1;
			n--;
		}
	}
	return n <= 0 ? true : false;
};
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
