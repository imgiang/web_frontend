<template>
  <div>
    <el-row align="bottom">
      <el-col :xs="24" :md="10" class="p-3">
        <div>Find Experts?</div>
        <el-autocomplete
          v-model="what"
          :fetch-suggestions="whatSearch"
          :clearable="true"
          class="w-100"
          placeholder="Name or Industry"
          :prefix-icon="User"
        >
        </el-autocomplete>
      </el-col>
      <el-col :xs="24" :md="10" class="p-3">
        <div>Find Where?</div>
        <el-autocomplete
          v-model="where"
          :fetch-suggestions="whereSearch"
          class="w-100"
          placeholder="Country, City"
          :clearable="true"
          :prefix-icon="MapLocation"
        >
        </el-autocomplete>
      </el-col>
      <el-col :xs="24" :md="4" class="p-3">
        <el-button type="success" class="w-100"
          ><el-icon><Search /></el-icon> Search</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { User, MapLocation, Search } from '@element-plus/icons-vue'

import { getIndustries, searchIndustries } from '~/api/Industry'
import Industry from '~/model/Industry'

const what = ref('')
const where = ref('')

const industries = ref<Industry[]>([])

const suggest = computed(() =>
  industries.value.map(industry => ({
    value: industry.name
  }))
)

const whatSearch = async (queryString: string, cb: (arg: any) => void) => {
  if (queryString === '') {
    industries.value = await getIndustries()
  } else {
    industries.value = await searchIndustries(queryString)
  }
  cb(suggest.value)
}
const whereSearch = (queryString: string, cb: (arg: any) => void) => {
  const arr = [1, 2, 3]
  cb(arr.map(i => ({ value: i, label: i })))
}
</script>
