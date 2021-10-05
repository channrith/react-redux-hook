const withdrawMoneyAction = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'banking.withdraw',
      payload: amount,
    });
  };
};

export default withdrawMoneyAction;
