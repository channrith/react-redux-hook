const depositMoneyAction = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'banking.deposit',
      payload: amount,
    });
  };
};

export default depositMoneyAction;
