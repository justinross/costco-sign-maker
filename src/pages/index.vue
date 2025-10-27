<template>
  <SignPreview :sign-data="signData" />
  <SignEditor v-model="signData" class="d-print-none" />
</template>

<script lang="ts" setup>
  import type { SignModel } from '@/types/sign'
  import SignEditor from '@/components/SignEditor.vue'
  import SignPreview from '@/components/SignPreview.vue'

  const signData: SignModel = reactive({
    sku: '1729244',
    name: `Philips
home theater system
dvd/cd      hts3566d/37`,
    features: [],
    price: 19.99,
    unitPriceLabel: 'PRICE PER EACH',
    unitPrice: '.050',
    showBarcode: true,
    barcodeValue: '042238733008',
    deathStar: true,
    priceDate: '10/27/25',
  })
</script>
