import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/banking';

const BankingComponent = () => {
  // start using hook
  const bankAccount = useSelector((state) => state.bank);
  const dispatch = useDispatch();

  const { depositMoneyAction, withdrawMoneyAction } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <h1>{bankAccount}</h1>
      <button onClick={() => depositMoneyAction(100)}>Deposit</button>
      <button onClick={() => withdrawMoneyAction(100)}>Withdraw</button>
    </div>
  );
};

export default BankingComponent;
