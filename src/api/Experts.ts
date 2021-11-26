import axios from 'axios'
import Expert from '~/model/Expert'

const apiUrl = 'http://101.96.66.219:8005/api/experts'

export const getExperts = async (page = 0, size = 20, sort = 'name', desc = false): Promise<Expert[] | undefined> => {
  try {
    const res = await axios.get(apiUrl, {
      params: {
        page,
        size,
        sort,
        desc
      }
    })
    return res.data
  } catch (error) {
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

export const searchExperts = async (what: string): Promise<Expert[] | undefined> => {
  try {
    const res = await axios.get(apiUrl, { params: { what } })
    return res.data
  } catch (error) {
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
