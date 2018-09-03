let initialState = {
    username: '',
    userProfile: '',
    repos: '',
    totalRepositories:'',
    repositories: [],
    sortOptions: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USERNAME':
            return {
                ...state,
                username: action.username
            }
            break;
        case 'UPDATE_USERPROFILE':
            return {
                ...state,
                userProfile: action.userProfile
            }
            break;
        case 'UPDATE_REPOS':
            return {
                ...state,
                repos: action.repos
            }
            break;
        case 'UPDATE_REPOSITORIES':
            return {
                ...state,
                repositories: action.repositories,
                totalRepositories: action.totalRepositories
            }
            break;
        case 'UPDATE_OPTION' :
             return {
                 ... state,
                 sortOptions : action.sortOptions
             }     
        default:
            return state;
    }
}

export default reducer;