declare module '@540deg/rn-sumup' {
  export function setup(apiKey: string): void

  export function authenticate(): Promise<void>

  export function preferences(): Promise<void>

  export function isLoggedIn(): Promise<boolean>

  export function logout(): Promise<boolean>

  export function checkout(checkoutRequest: CheckoutRequest): Promise<CheckoutResponse>

  export interface CheckoutRequest {
    currencyCode: 'SMPCurrencyCodeBGN' | 'SMPCurrencyCodeBRL' | 'SMPCurrencyCodeCHF' | 'SMPCurrencyCodeCLP' | 'SMPCurrencyCodeCZK' | 'SMPCurrencyCodeDKK' | 'SMPCurrencyCodeEUR' | 'SMPCurrencyCodeGBP' | 'SMPCurrencyCodeHUF' | 'SMPCurrencyCodeNOK' | 'SMPCurrencyCodePLN' | 'SMPCurrencyCodeRON' | 'SMPCurrencyCodeSEK' | 'SMPCurrencyCodeUSD'
    totalAmount: string
    title: string
    foreignTransactionId?: string
  }

  export interface CheckoutResponse {
    additionalInfo: {
      cardLast4Digits: string
    }
    cardType: string
    installments: number
    success: boolean
    transactionCode: string
  }
}
