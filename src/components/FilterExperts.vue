<template>
  <el-row justify="center" align="middle">
    <el-col :xs="24" :sm="6" class="p-3">
      <el-select size="medium" class="w-100" v-model="industry" filterable clearable placeholder="Occupation">
        <template #prefix>
          <el-icon><Suitcase /></el-icon>
        </template>
        <el-option v-for="item in fields" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-col>
    <el-col :xs="24" :sm="6" class="p-3">
      <el-select size="medium" class="w-100" v-model="industry" filterable clearable placeholder="Country">
        <template #prefix>
          <el-icon><Location /></el-icon>
        </template>
        <el-option v-for="item in fields" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-col>
    <el-col :xs="12" :sm="4" class="p-3">
      <el-button size="medium" class="w-100">Other Filter</el-button>
    </el-col>
    <el-col :xs="12" :sm="4" class="p-3">
      <el-button size="medium" class="w-100"
        ><el-icon><Filter /></el-icon> Filter</el-button
      >
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fieldsExperts } from '~/api/Experts'
import { Suitcase, Filter, Location } from '@element-plus/icons-vue'

const industry = ref('')
const fields = ref<{ value: string; label: string }[]>([])
onMounted(async () => {
  const obj = await fieldsExperts()
  fields.value = Object.keys(obj).map(field => ({
    value: field,
    label: `${field} (${obj[field]})`
  }))
})
</script>
