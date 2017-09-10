export function updateDetail(data){
  return function (dispatch){
    dispatch({
      type: "UPDATE_PERSON_DETAIL",
      data
    });
  };
}