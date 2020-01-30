import { createStackNavigator } from "react-navigation-stack";
import CoinDetails from "../../components/screens/CoinDetails/CoinDetails";
import WalletLanding from "../../components/screens/WalletLanding/WalletLanding";
import InterestCalculatorScreen from "../../components/screens/InterestCalculatorScreen/InterestCalculatorScreen";
import WalletInterest from "../../components/screens/WalletInterest/WalletInterest";
import AllTransactions from "../../components/screens/AllTransactions/AllTransactions";
import BalanceHistory from "../../components/screens/BalanceHistory/BalanceHistory";
import TransactionDetails from "../../components/screens/TransactionDetails/TransactionDetails";
import Community from "../../components/screens/Community/Community";
import MyCel from "../../components/screens/MyCel/MyCel";
import GetCoinsLanding from "../../components/screens/GetCoinsLanding/GetCoinsLanding";
import {
  defaultNavigationOptions,
  transitionConfig,
} from "../navigationConfig";
import { celPayFlow } from "./celPayFlow";
import { withdrawFlow } from "./withdrawFlow";
import { profileFlow } from "./profileFlow";
import { depositFlow } from "./depositFlow";
import { borrowFlow } from "./borrowFlow";
import InterestRates from "../../components/screens/InterestRates/InterestRates";

export const walletFlow = {
  screens: {
    WalletLanding,
    WalletInterest,
    BalanceHistory,
    CoinDetails,
    AllTransactions,
    TransactionDetails,
    Community,
    GetCoinsLanding,
    MyCel,
    InterestCalculator: InterestCalculatorScreen,
    InterestRates,
    ...depositFlow.screens,
    ...profileFlow.screens,
    ...celPayFlow.screens,
    ...withdrawFlow.screens,
    ...borrowFlow.screens,
  },
  props: {
    initialRouteName: "WalletLanding",
    defaultNavigationOptions,
    transitionConfig,
  },
};

export const walletNavigator = createStackNavigator(
  walletFlow.screens,
  walletFlow.props
);
