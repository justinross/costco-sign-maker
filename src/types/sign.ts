export interface SignModel {
  sku: string
  name: string
  features: string[]
  price: number
  unitPriceLabel: string
  unitPrice: string
  showBarcode: boolean
  barcodeValue: string
  priceDate?: string
  deathStar?: boolean
}
