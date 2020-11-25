
const initialstate = {
  businessOn: true,
  techOn: false,
  artOn: false,
  archiOn: false
}


const newsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SELECT_BUSINESS':
      return {
        ...state,
        businessOn: true,
        techOn: false,
        artOn: false,
        archiOn: false
      }
    case 'SELECT_TECH':
        return {
          ...state,
          techOn: true,
          businessOn: false,
          artOn: false,
          archiOn: false
        }
    case 'SELECT_ART':
        return {
            ...state,
          artOn: true,
          techOn: false,
          businessOn: false,
          archiOn: false
        }
    case 'SELECT_ARCHITECT':
        return {
         ...state,
        archiOn: true,
        businessOn: false,
        techOn: false,
        artOn: false
          }
    default:
      return state;
  }
}

export default newsReducer;


