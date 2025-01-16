export interface ApiInput {
    minAge: number
    maxAge: number
    city: string
    contractIds: number[]
    fetchAll: boolean
    pincode: string
    category: string
    loadCategories: boolean
    loadSubCategories: boolean
    loadOnlyRadiology: boolean
  }
  
  export interface IconProps {
    type: number
    iconText: string
    iconTag: string
    iconUrl: string
    deeplink: string
    order: number
    isActive: boolean
    eventName: string
    webViewTitle: string
    serviceName: string
    serviceType: string
    configIconTagName: string
    disabledOnWeb: boolean
    checkForCorporates: boolean
    enabledCorporates: string[]
    disabledCorporates: string[]
    apiinput?: ApiInput
    minimumIOSAppVersion?: string
    minimumAndroidAppVersion?: string
  }
  
  export interface IconSection {
    id: string
    title: string
    props:IconProps[]
  }