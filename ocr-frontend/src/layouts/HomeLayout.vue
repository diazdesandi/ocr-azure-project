<script setup lang="ts">
import { Header, Sidebar } from '@/components/layout';
import { MainPage } from '@/pages';
</script>
<template>
  <div class="grid h-screen w-full pl-[56px]">
    <Sidebar />
    <div class="flex flex-col">
      <Header />
      <MainPage />
    </div>
  </div>
</template>
