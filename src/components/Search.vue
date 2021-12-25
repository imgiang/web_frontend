<template>
  <div>
    <el-row :gutter="20" align="bottom">
      <el-col :xs="24" :md="10" class="p-3">
        <div>Find Experts?</div>
        <el-autocomplete
          v-model="what"
          :fetch-suggestions="whatSearch"
          class="inline-input w-100"
          placeholder="Name or Industry"
        />
      </el-col>
      <el-col :xs="24" :md="10" class="p-3">
        <div>Find Experts?</div>
        <el-autocomplete
          v-model="where"
          :fetch-suggestions="whereSearch"
          class="inline-input w-100"
          placeholder="Country, City"
        />
      </el-col>
      <el-col :xs="24" :md="4" class="p-3">
        <el-button class="w-100"
          ><el-icon><Search /></el-icon> Search</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { Search } from '@element-plus/icons-vue'

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
const whereSearch = (queryString: string, cb: (arg: any) => void) => {}
</script>
