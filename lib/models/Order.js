const pool = require('pool');

// 1. define the shape of our data
// 2. define methods to access that data (CRUD)
class Order {
  id;
  quantityOfItems;

  constructor(row) {
    this.id = row.id;
    this.quantityOfItems = row.quantity_of_items;
  }

  // static method
  // instance method
  static async insert(quantityOfItems) {
    const { rows } = await pool.query(
      `INSERT INTO orders (quantity_of_items) 
      VALUES ($1) 
      RETURNING *`,
      [quantityOfItems]
    );

    // rows = [{ id: '1', quantity_of_items: 10 }]
    // { id: '1', quantityOfItems: 10 }
    return new Order(rows[0]);
  }

  static async update(quantityOfItems) {
    const { rows } = await pool.query(
      `UPDATE INTO orders (quantity_of_items) 
      SET quantity_of_tems = ($1) 
      RETURNING id, quantity_of_items`,
      [quantityOfItems, id]
    );
    return rows;
  }

  static async grab(quantityOfItems) {
    const { rows } = await pool.query(
      `SELECT id, quantity_of_items 
      FROM orders 
      WHERE id = $1`,
      [quantityOfItems]
    );
    return rows;
  }

  static async obliterate(id) {
    const { rows } = await pool.query(`
    DELETE FROM orders
    WHERE id = $1
    RETURNING id, quantity_of_items`, [id]
    );
    return new Order(rows.rows[0]);
  }
}

module.exports = Order;
