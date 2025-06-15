const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
            
        case 'TOGGLE_TODO':
            return state.map(item =>
                item.id === action.payload
                ? {...item, completed: !item.completed} 
                : item
            );
        
        case 'DELETE_TODO':
            return state.filter(item => item.id !== action.payload);

        case 'UPDATE_TODO':
            return state.map(item => 
                item.id === action.payload.id
                ? {...item, text:action.payload.text}
                : item
            )
    
        default:
            state;
    }
}

export default reducer;

