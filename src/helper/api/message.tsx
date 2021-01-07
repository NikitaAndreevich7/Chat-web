import axios from 'axios'

export const getMessageHistory = async (payload: object) => {
  try {
    const response = await axios.post('https://...', payload)
    return response
  } catch (error) {}
}
