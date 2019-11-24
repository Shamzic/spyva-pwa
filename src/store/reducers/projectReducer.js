const initState = {
  projects: [
    {id: '1', title: 'help me find a shift', content: 'blah blah blah'},
    {id: '2', title: 'help me find a bike', content: 'blah blah blah'},
    {id: '3', title: 'help me find a command', content: 'blah blah blah'},
  ]
};

const projectReducer = (state = initState, action) => {

  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log("created project : ", action.project)
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log("create project error", action.err);
      return state;
      case 'DELETE_PROJECT':
        console.log("delete project : ", action.project)
        return state;
      case 'DELETE_PROJECT_ERROR':
        console.log("delete project error", action.err);
        return state;

    default:
        return state;
  }
}

export default projectReducer
