const reducer = (state = 0, { payload, type }) => {
  const types = type.split('.');
  if (types.length < 2 && types[0] !== 'banking') return state;

  switch (types[1]) {
    case 'deposit':
      return state + payload;
    case 'withdraw':
      return state - payload;
    default:
      return state;
  }
};

export default reducer;
