const initState = {
  shifts: [
    {id: '1', date: 'help me find a shift', userId: 'jxOqm5TnZYW2vpYLngrSI3GEeLC2'},
    {id: '2', date: 'help me find a bike', userId: 'jxOqm5TnZYW2vpYLngrSI3GEeLC2'},
    {id: '3', date: 'help me find a command', userId: 'jxOqm5TnZYW2vpYLngrSI3GEeLC2'},
  ]
};

const shiftReducer = (state = initState, action) => {

  switch(action.type) {
    case 'CREATE_SHIFT':
      console.log("created shift : ", action.shift)
      return state;
    case 'CREATE_SHIFT_ERROR':
      console.log("create shift error", action.err);
      return state;
      case 'DELETE_SHIFT':
        console.log("delete shift : ", action.shift)
        return state;
      case 'DELETE_SHIFT_ERROR':
        console.log("delete shift error", action.err);
        return state;

    default:
        return state;
  }
}

export default shiftReducer
