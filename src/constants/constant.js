const items = {
  cursor: {
    count: 0,
    initialPrice: 5,
    price: 5,
    revenue: 1,
  },
  grandMa: {
    count: 0,
    initialPrice: 100,
    price: 100,
    revenue: 5,
  },
  bakery: {
    count: 0,
    initialPrice: 500,
    price: 500,
    revenue: 15,
  },
  mine: {
    count: 0,
    initialPrice: 2000,
    price: 2000,
    revenue: 40,
  },
  factory: {
    count: 0,
    initialPrice: 12000,
    price: 12000,
    revenue: 100,
  },
  robot: {
    count: 0,
    initialPrice: 130000,
    price: 130000,
    revenue: 500,
  },
  ship: {
    count: 0,
    initialPrice: 1400000,
    price: 1400000,
    revenue: 3000,
  }
}

const initialState = {
  cake: 0,
  cakePerClick: 1,
  items,
}

export const typeList = ['cursor', 'grandMa', 'bakery', 'mine', 'factory', 'robot', 'ship'];

export default initialState;