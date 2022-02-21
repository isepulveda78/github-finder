import React from 'react'
import { createContext, useReducer } from "react"
import githubReducer from './GithubReducer'
const GithubContext = createContext()

export const GithubProvider = ({children}) => {

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)
  
  return <GithubContext.Provider value={{
    ...state,
    // instead of having, users, loading,
    // user, repos, we can just pass ...state
    // users: state.users, 
    // loading: state.loading,
    // user: state.user,
    // repos: state.repos,
    dispatch
    }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext