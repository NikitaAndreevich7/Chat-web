import axios from 'axios'

export const userList = async () => {
  try {
    const response = await axios.get('https://...')
    return response
  } catch (error) {}
}

export const userData = async () => {
  try {
    const response = await axios.get('https://...')
    return response
  } catch (error) {}
}
