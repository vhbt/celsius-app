import { Share } from "react-native";

import ACTIONS from '../../constants/ACTIONS';
import { apiError, startApiCall } from "../api/apiActions";
import API from "../../constants/API";
import { showMessage } from "../ui/uiActions";
import transfersService from "../../services/transfer-service";
import formatter from "../../utils/formatter";
import { navigateTo } from "../nav/navActions";

export {
  celPayFriend,
  celPayShareLink,
}

function celPayFriend() {
  return async (dispatch, getState) => {
    try {
      const { amountCrypto, friend, coin, code, pin, message } = getState().forms.formData

      const transfer = {
        amount: amountCrypto,
        coin: coin.toUpperCase(),
        friend_id: friend.id,
        message,
      };

      const verification = { twoFactorCode: code, pin }

      dispatch(startApiCall(API.CREATE_TRANSFER))
      const transferRes = await transfersService.create(transfer, verification)
      const transferData = transferRes.data.transfer

      dispatch({
        type: ACTIONS.CREATE_TRANSFER_SUCCESS,
        transfer: transferData,
      })

      const names = friend.name ? friend.name.split(' ') : undefined;
      let msg = `Successfully sent ${formatter.crypto(amountCrypto, coin)}`;
      if (names && names[0]) msg += ` to ${names[0]}!`;
      dispatch(showMessage('success', msg))
      dispatch(navigateTo('TransactionDetails', { id: transferData.transaction_id }))
    } catch (err) {
      dispatch(apiError(API.CREATE_TRANSFER, err))
      dispatch(showMessage('error', err.msg))
    }
  }
}

function celPayShareLink() {
  return async (dispatch, getState) => {
    try {
      const { amountCrypto, coin, code, pin } = getState().forms.formData

      const transfer = {
        amount: amountCrypto,
        coin: coin.toUpperCase(),
      };

      const verification = { twoFactorCode: code, pin }

      dispatch(startApiCall(API.CREATE_TRANSFER))
      const transferRes = await transfersService.create(transfer, verification)
      const transferData = transferRes.data.transfer

      dispatch({
        type: ACTIONS.CREATE_TRANSFER_SUCCESS,
        transfer: transferData,
      })

      // create branch link or get from BE on creation
      const branchLink = transferRes.data.branch_link;

      const shareMsg = `You got ${ formatter.crypto(amountCrypto, coin) }! Click on the link to claim it ${branchLink}`;
      await Share.share({ message: shareMsg, title: 'Celsius CelPay' });

      const msg = `Successfully sent ${formatter.crypto(amountCrypto, coin)}!`;
      dispatch(showMessage('success', msg));
      dispatch(navigateTo('TransactionDetails', { id: transferData.transaction_id }));

    } catch(err) {
      dispatch(apiError(API.CREATE_TRANSFER, err))
      dispatch(showMessage('error', err.msg))
    }
  }
}
