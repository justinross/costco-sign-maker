<template>
  <v-container class="half-page costco-sign">
    <v-row class="top" justify="start">
      <v-col class="sku" cols="6">{{ signData.sku }}</v-col>
      <v-col class="barcode" cols="4"><vue-barcode v-if="signData.showBarcode" :options="{format: 'EAN13', height: 35, font: 'Courier New, monospace', fontOptions: 'bold', textMargin:-2, width:2, fontSize:20, margin:0 }" :value="signData.barcodeValue" /></v-col>
      <v-col v-if="signData.deathStar" class="deathStar" cols="2">*</v-col>
    </v-row>
    <v-row class="name">{{ signData.name.toUpperCase() }}</v-row>
    <v-row>
      <v-col>
        <ul class="features">
          <li v-for="(feature, index) in signData.features" :key="index"><span>{{ feature }}</span></li>
        </ul>
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col class="unitPriceLabel">
        {{ signData.unitPriceLabel }}
      </v-col>
      <v-col class="sellPriceLabel">
        SELL PRICE
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col class="unitPrice">{{ signData.unitPrice }}</v-col>
      <v-col class="sellPrice">
        <v-row>
          <v-col cols="12">{{ signData.price }}</v-col>
        </v-row>
        <v-row class="priceDate">
          <v-col cols="12">{{ signData.priceDate }}</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import type { SignModel } from '@/types/sign'
  import VueBarcode from '@chenfengyuan/vue-barcode'

  defineProps({
    signData: {
      type: Object as () => SignModel,
      required: true,
    },
  })
</script>

<style scoped lang="scss">

.half-page{
  width: 8.5in;
  height: 5.5in;
  border: 1px solid black;
}
@media print{
  .half-page{
    margin: 0;
    border: none;
    border-bottom: 1px solid #ddd;
  }
}

.costco-sign {
  font-family: 'Garamond', Times, serif;
  // background-image: url('public/images/signsample.png');
  background-size: cover;
  *{
    padding: 0;
    margin: 0;
  }
  .v-row{
    margin: 0 !important;
  }
  .top{
    height: .8in;
    .sku {
      font-size: 70pt;
      font-weight: bold;
      text-align: left;
      padding-left: 44pt;
      line-height: 1;
    }

    .barcode{
      font-size: 36pt;
      font-weight: bold;
      text-align: right;
      padding-top: 10pt;
      line-height: 1;
    }
    .deathStar{
      font-size: 80pt;
      font-weight: bold;
      line-height: 1;
      text-align: right;
      padding-top: 10pt;
    }
  }

  .name{
    line-height: 0.95;
    font-size: 39pt;
    padding-left: 16pt;
    white-space: pre-wrap;
    padding-top: 4pt;
    height: 115pt;
  }

  .features{
    list-style-type: disc;
    margin-left: 45pt;
    margin-top: -4pt;
    letter-spacing: -0.5pt;
    font-weight: bold;
    line-height: .75;
    height: 1in;
    columns: 2;
    column-gap: 16pt;
    li{
      margin-bottom: 0pt;
      font-size: 24pt;
      break-inside: avoid;
      span{
        font-size: 16pt;
      margin-left: -2pt;
      }
    }
  }
  .unitPriceLabel{
    font-size: 18pt;
    font-weight: bold;
    text-align: left;
    margin-left: 24pt;
  }
  .unitPrice{
    font-size: 50pt;
    font-weight: bold;
    text-align: left;
    margin-left: 24pt;
    line-height: 1;
  }
  .sellPriceLabel{
    font-size: 18pt;
    font-weight: bold;
    text-align: right;
    margin-right: 44pt;
  }
  .sellPrice{
    font-size: 114pt;
    font-weight: bold;
    text-align: right;
    line-height: .75;
    margin-right: 18pt;
    .priceDate{
      font-size: 10pt;
      font-weight: bold;
      font-family: 'Arial', sans-serif;
      line-height: 1;
      text-align: right;
      width: 100%;
      position: relative;
      top: 0pt;
      right: 20pt;
    }
  }
}
</style>
