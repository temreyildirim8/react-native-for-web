import * as ActionTypes from "../generics/actionTypes";
import { updateObject } from "../generics/utility";

const INITIAL_STATE = {
  loading: false,
  availabilityResponse: {},
  selectedJourney: {},
  errorCode: "",
  errorMessage: ""
};

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.CLOSE_DRAWER:
      return updateObject(
        state,
        {},
        {
          loading: true
        }
      );
    case ActionTypes.OPEN_DRAWER:
      return updateObject(state, INITIAL_STATE, {
        availabilityResponse: action.availabilityResponse
      });
    case ActionTypes.LOGIN_CALL_START:
      return updateObject(state, INITIAL_STATE, {
        errorCode: action.errorCode,
        errorMessage: action.errorMessage
      });
    case ActionTypes.LOGIN_FAILED:
      return updateObject(state, INITIAL_STATE, {
        selectedJourney: action.selectedJourney
      });
    default:
      return state;
  }
};

export default dashboardReducer;
