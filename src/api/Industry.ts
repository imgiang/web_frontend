import axios from 'axios'
import Industry from '~/model/Industry'

const apiUrl = 'industries'

export const getIndustries = async (page = 0, size = 20, sortBy = 'level'): Promise<Industry[]> => {
  try {
    const res = await axios.get(apiUrl, { params: { page, size, sortBy } })
    return res.data
  } catch (error) {
    throw new Error('')
  }
}

export const searchIndustries = async (name: string): Promise<Industry[]> => {
  try {
    const res = await axios.get(`${apiUrl}/search`, { params: { name } })
    return res.data
  } catch (error) {
    throw new Error('')
  }
}
