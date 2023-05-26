const items = {
  cursor: {
    count: 0,
    initialPrice: 15,
    price: 15,
  },
  grandMa: {
    count: 0,
    initialPrice: 100,
    price: 100,
  },
  bakery: {
    count: 0,
    initialPrice: 1500,
    price: 1500,
  }
}

const initialState = {
  cake: 0,
  cakePerClick: 1,
  items,
}

export const typeList = ['cursor', 'grandMa', 'bakery'];

export default initialState;