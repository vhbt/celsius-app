import ACTIONS from '../../config/constants/ACTIONS';
import * as navActions from '../nav/navActions';

export {
  showMessage,
  clearMessage,
  setHeaderHeight,
  toggleCamera,
  takeCameraPhoto,
  flipCamera,
  activateCamera,
  retakePhoto,
  // submitForm,
  initForm,
  updateFormField,
}

let msgTimeout;

function showMessage(msgType, text) {
  return dispatch => {
    clearTimeout(msgTimeout);

    msgTimeout = setTimeout(() => {
      dispatch(clearMessage());
      clearTimeout(msgTimeout);
    }, 5000);

    dispatch({
      type: ACTIONS.SHOW_MESSAGE,
      msgType,
      text,
    })
  }
}

function clearMessage() {
  return {
    type: ACTIONS.CLEAR_MESSAGE,
  }
}

function setHeaderHeight(height, isAnimatedHeader = false) {
  return {
    type: ACTIONS.SET_HEADER_HEIGHT,
    header: height,
    isAnimatedHeader,
  }
}

function takeCameraPhoto(photo) {
  return {
    type: ACTIONS.TAKE_CAMERA_PHOTO,
    photo,
  }
}

function retakePhoto() {
  return {
    type: ACTIONS.RETAKE_PHOTO,
  }
}

function toggleCamera(photoName) {
  return {
    type: ACTIONS.TOGGLE_CAMERA,
    photoName,
  }
}

function flipCamera() {
  return {
    type: ACTIONS.FLIP_CAMERA,
  }
}

function activateCamera(cameraProps) {
  return dispatch => {
    dispatch({
      type: ACTIONS.ACTIVATE_CAMERA,
      ...cameraProps,
    });
    dispatch(navActions.navigateTo('Camera'));
  }
}

// function clearForm() {
//   return {}
// }

// function submitForm(formName, formData) {
//   console.log({ formName, formData });
//   return {
//     type: ACTIONS[`SUBMIT_${formName}`],
//     formData,
//   }
// }

function updateFormField(field, value) {
  return {
    type: ACTIONS.UPDATE_FORM_FIELD,
    field,
    value,
  }
}

function initForm(formData) {
  return {
    type: ACTIONS.INIT_FORM,
    formData,
  }
}
