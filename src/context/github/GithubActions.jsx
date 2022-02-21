import React from 'react'
import axios from 'axios'

const githubSearch = axios.create({
  baseURL: 'https://api.github.com/',
})

const github = axios.create({
  baseURL: 'https://api.github.com/',
})

// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const response = await githubSearch.get(`/search/users?${params}`)
  return response.data.items
}

// Get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ])

  return { user: user.data, repos: repos.data }
}