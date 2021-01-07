import axios from 'axios'

export const registration = async (payload: object) => {
  try {
    const response = await axios.post('https://...', payload)
    return response
  } catch (error) {}
}

export const authorization = async (payload: object) => {
  try {
    const response = await axios.post('https://...', payload)
    return response
  } catch (error) {}
}
