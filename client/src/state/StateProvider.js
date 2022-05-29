import React, { createContext, useContext, useReducer } from "react";

// 2 Things : Dispatch(Pushing data in data layer) and Pull(Pulling data in a component)

// Prepares data layer
export const StateContext = createContext()

// Wrap our data and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
)

// Pull Information from data
export const useStateValue = () => useContext(StateContext)
