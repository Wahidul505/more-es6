const randomThings = {
  sky: 'lightblue', livesIn: 'earth', road: 'country road', destination: 'far away', miles: 123, color: {
    light: 'pink', dark: 'red', medium: 'orange', exceptional: { color: 'blue', type: 'cornflowerblue', price: 25 }
  }
};
console.log(randomThings.color.exceptional.color);
console.log(randomThings.color.exceptional.type);
console.log(randomThings.sky.color?.exceptional.type);