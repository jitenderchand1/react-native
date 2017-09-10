
const initialState = {
  personDetail : {},
};

export default function personDetail(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_PERSON_DETAIL':
      return Object.assign({}, { personDetail: action.data})

    default:
      return state;
  }
}


