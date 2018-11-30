import signupFlow from './flows/signup-flow';

export default function(spec) {
  testSignupFlow(spec);
}

export function testSingleSuite(spec) {
  spec.describe('Single test', () => {
    spec.it('should disable button click when 3 digits are entered', signupFlow.disableRepeatPasscode(spec))
    spec.it('should show error when different pin is entered', signupFlow.disableWrongPasscode(spec))
    spec.it('should go to NoKYC screen when repeated pin is valid', signupFlow.finishPasscode(spec))
  })
}

export function testSignupFlow(spec) {
  spec.describe('Signup Flow', () => {
    // Successful flow
    spec.it('should go to NoKYC screen when flow is successful', signupFlow.successfulFlow(spec))

    // Welcome screen tests
    spec.it('should go to SignupOne screen when button is pressed', signupFlow.pressSkipIntro(spec))

    // SignupOne screen tests
    spec.it('button should be disabled when no email and password entered', signupFlow.disableWhenNoData(spec))
    spec.it('button should be disabled when no email entered', signupFlow.disableWhenNoEmail(spec))
    spec.it('button should be disabled when no password entered', signupFlow.disableWhenNoPassword(spec))
    spec.it('should show error when invalid email entered', signupFlow.errorWhenEmailInvalid(spec))
    spec.it('should show error when when weak password', signupFlow.errorWhenPasswordWeak(spec))
    spec.it('should show error when user exists', signupFlow.errorWhenUserExists(spec))
    spec.it('should go to SignupTwo screen when all info is valid', signupFlow.stepOneSuccess(spec))

    // SignupTwo screen tests
    spec.it('button should be disabled when no first and last name entered', signupFlow.disableWhenNoNames(spec))
    spec.it('button should be disabled when no first name entered', signupFlow.disableWhenNoLastName(spec))
    spec.it('button should be disabled when no last name entered', signupFlow.disableWhenNoFirstName(spec))
    spec.it('button should be disabled when terms not agreed to', signupFlow.disableWhenNoFirstName(spec))
    spec.it('should go to EnterPasscode screen when all info is valid', signupFlow.stepTwoSuccess(spec))

    // CreatePasscode screen tests
    spec.it('should disable button click when 3 digits are entered', signupFlow.disableCreatePasscode(spec))
    spec.it('should go to RepeatPasscode screen when 4 digits are entered', signupFlow.createPasscode(spec))

    // RepeatPasscode screen tests
    spec.it('should disable button click when 3 digits are entered', signupFlow.disableRepeatPasscode(spec))
    spec.it('should show error when different pin is entered', signupFlow.disableWrongPasscode(spec))
    spec.it('should go to NoKYC screen when repeated pin is valid', signupFlow.finishPasscode(spec))

    // // User exited registration process after first step
    // spec.it('should go to SignupTwo screen on app open if user hasn\'t entered his name', testPassed(spec))
    // spec.it('should go to EnterPasscode screen on app open if user hasn\'t entered his pin', testPassed(spec))
    // spec.it('should go to NoKYC screen when all steps are successfully finished', testPassed(spec))
  })
}
