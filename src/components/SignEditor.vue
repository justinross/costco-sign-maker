<template>
  <div>
    <v-row>
      <v-col><v-text-field v-model="signModel.sku" label="SKU" /></v-col>
      <v-col><v-checkbox v-model="signModel.showBarcode" label="Show Barcode" /></v-col>
      <v-col><v-text-field v-model="signModel.barcodeValue" label="Barcode" /></v-col>
      <v-col><v-checkbox v-model="signModel.deathStar" label="Asterisk (Death Star)" /></v-col>
    </v-row>
    <v-row>
      <v-col><v-textarea v-model="signModel.name" label="Product Name" /></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-combobox
          v-model="signModel.features"
          chips
          closable-chips
          hint="Press Enter to add features"
          label="Features"
          multiple
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col><v-text-field v-model="signModel.unitPriceLabel" label="Unit Price Label" />
        <v-text-field v-model="signModel.unitPrice" label="Unit Price" /></v-col>
      <v-col><v-text-field v-model.number="signModel.price" label="Price" type="number" />
        <v-text-field v-model="signModel.priceDate" label="Price Date" /></v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
  import type { SignModel } from '@/types/sign'

  // Modern Vue 3.3+ approach using defineModel
  const signModel = defineModel<SignModel>({ required: true })
</script>

<style scoped>

</style>
