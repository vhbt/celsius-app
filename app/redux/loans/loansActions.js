import ACTIONS from '../../constants/ACTIONS';
import API from '../../constants/API';
import { showMessage, closeModal } from "../ui/uiActions";
import { apiError, startApiCall } from "../api/apiActions";
import { navigateTo } from "../nav/navActions";
import loansService from "../../services/loans-service";
// import { analyticsEvents } from "../../utils/analytics-util";

export {
  applyForALoan,
  getAllLoans
}

/**
 * Applies the user for a loan
 */
function applyForALoan() {
  return async (dispatch, getState) => {
    try {
      const { formData } = getState().forms;
      startApiCall(API.APPLY_FOR_LOAN);

      const loanApplication = {
        coin: formData.coin,
        amount_collateral_usd: formData.amountCollateralUSD,
        amount_collateral_crypto: formData.amountCollateralCrypto,
        ltv: formData.ltv.percent,
        interest: formData.ltv.interest,
        loan_amount: formData.loanAmount,
        term_of_loan: formData.termOfLoan,
        bank_info_id: formData.bankInfo.id,
      }

      const verification = {
        pin: formData.pin,
        twoFactorCode: formData.code,
      }

      const res = await loansService.apply(loanApplication, verification);
      dispatch({ type: ACTIONS.APPLY_FOR_LOAN_SUCCESS, loan: res.data.loan });

      // analyticsEvents.applyForLoan(res.data)

      dispatch(closeModal());
      dispatch(showMessage('success', 'You have successfully applied for a loan! Somebody from Celsius will contact you.'));
      dispatch(navigateTo('TransactionDetails', { id: res.data.transaction_id }));
    } catch (err) {
      dispatch(showMessage('error', err.msg));
      dispatch(apiError(API.APPLY_FOR_LOAN, err));
    }
  }
}

/**
 * Get all loans for user
 */
function getAllLoans() {
  return async (dispatch) => {
    try {
      startApiCall(API.GET_ALL_LOANS);

      const res = await loansService.getAllLoans();

      dispatch(getAllLoansSuccess(res.data));
    } catch (err) {
      dispatch(showMessage('error', err.msg));
      dispatch(apiError(API.GET_ALL_LOANS, err));
    }
  }
}

function getAllLoansSuccess(loans) {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.GET_ALL_LOANS_SUCCESS,
      callName: API.GET_ALL_LOANS,
      allLoans: loans,
    });
  }
}
