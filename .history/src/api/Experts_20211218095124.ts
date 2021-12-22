import axios from 'axios'
import Expert from '~/model/Expert'

const apiUrl = 'experts'

export const getExperts = async (page = 0, size = 30, sort = 'name', asc = true): Promise<Expert[]> => {
  try {
    const res = await axios.get(apiUrl, {
      params: {
        page,
        size,
        sort,
        asc
      }
    })
    return res.data
  } catch (error) {
    return []
    // console.log(error)
  }
}

export const getExpertById = async (id: string): Promise<Expert | undefined> => {
  try {
    const res = await axios.get(`${apiUrl}/${id}`)
    return res.data
  } catch (error) {
    // console.log(error)
  }
}

export const searchExperts = async (what: string): Promise<Expert[]> => {
  try {
    const res = await axios.get(`${apiUrl}/search`, { params: { what } })
    return res.data
  } catch (error) {
    return []
    // console.log(error)
  }
}

export const deleteExpertById = async (id: string): Promise<boolean> => {
  try {
    const res = await axios.delete(`${apiUrl}/${id}`)
    return res.status === 200
  } catch (error) {
    return false
  }
}

export const createExpert = async (expert: Expert): Promise<Expert | undefined> => {
  try {
    const res = await axios.post(apiUrl, expert)
    return res.data
  } catch (error) {
    // console.log(error)
  }
}

export const updateExpertById = async (id: string, expert: Expert): Promise<Expert | undefined> => {
  try {
    const res = await axios.put(`${apiUrl}/${id}`, expert)
    return res.data
  } catch (error) {
    // console.log(error)
  }
}
