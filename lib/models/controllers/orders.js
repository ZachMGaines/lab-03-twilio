const { Router } = require('express');
const Order = require('../models/Order');

// export default Router.......
module.exports = Router() // app.post(....)

  .get('/api/v1/orders', async (req, res) => {
    try {
      const order = await Order.grabAll(req.params.quantity);
      res.get(order);
    } catch (err) {
      res.status(500).send(err);
    }
  })

  .post('/api/v1/orders', async (req, res) => {
    try {
      const order = await Order.insert(req.body.quantity);
      res.send(order);
    } catch (err) {
      res.status(500).send(err);
    }
  })

  .put('/api/v1/orders/id', async (req, res) => {
    try {
      const order = await Order.update(req.params.id, req.body.quantity);
      res.send(order);
    } catch (err) {
      res.status(500).send(err);
    }
  })

  .get('/api/v1/orders/:id', async (req, res) => {
    try {
      const order = await Order.grab(req.params.id);
      res.send(order);
    } catch (err) {
      res.status(500).send(err);
    }
  })

  .delete('/api/v1/orders/:id', async (req, res) => {
    try {
      const order = await Order.obliterate(req.params.id);
      res.send(order);
    } catch (err) {
      res.status(500).send(err);
    }
  });



// class Dog {
//   name;
//   age;
//   weight;

//   constructor(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//   }

//   static legs() {
//     return 4;
//   }

//   sayName() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// // const spot = {
// //   name: 'spot',
// //   age: 5,
// //   weight: '20 lbs',
// // };
// const spot = new Dog('spot', 5, '20 lbs');
// spot.sayName();

// Dog.legs();
