import React, { createContext, useState } from 'react';

export const StrogeData = createContext()

const Context = ({children}) => {
    const [cartCount, setCartCount] = useState([])
    const [wishItem, setWishItem] = useState([])
    const [postQuery,setPostQuery] = useState()
    return (
        <StrogeData.Provider value={{product: [cartCount,setCartCount], wishCart: [wishItem, setWishItem], searchPost:[postQuery,setPostQuery]}}>
           {children}
        </StrogeData.Provider>
    );
};

export default Context;