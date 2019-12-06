import React from "react";
import { View } from "react-native";
import { action } from "@storybook/addon-actions";

import store from "../../../redux/store";
import { openModal } from "../../../redux/ui/uiActions";
import { MODALS } from "../../../constants/UI";
import CelButton from "../../atoms/CelButton/CelButton";
import CelText from "../../atoms/CelText/CelText";
import LoanApplicationSuccessModal from "./LoanApplicationSuccessModal";
import { updateFormFields } from "../../../redux/forms/formsActions";

const LoanApplicationSuccessModalStories = () => (
  <View style={{ marginBottom: 30 }}>
    <CelText margin="0 0 10 0">
      Application successful, autoapproved, with possible prepayment modal:
    </CelText>
    <CelButton
      style={{ marginBottom: 5 }}
      onPress={() => {
        store.dispatch(
          updateFormFields({
            loanAmount: 1,
            coin: "CEL",
          })
        );
        store.dispatch(openModal(MODALS.LOAN_APPLICATION_SUCCESS_MODAL));
      }}
    >
      Open Multi LoanApplicationSuccessModal
    </CelButton>
    <CelText margin="15 0 10 0">Application successful modal:</CelText>
    <CelButton
      onPress={() => {
        store.dispatch(
          updateFormFields({
            loanAmount: 1000000000,
            coin: "USD",
          })
        );
        store.dispatch(openModal(MODALS.LOAN_APPLICATION_SUCCESS_MODAL));
      }}
    >
      Open Info LoanApplicationSuccessModal
    </CelButton>

    <LoanApplicationSuccessModal
      onPressConfirm={action("onPressConfirm")}
      loanId={42}
    />
  </View>
);

export default LoanApplicationSuccessModalStories;
