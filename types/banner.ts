export interface BannerProps {
    type: number
    bannerUrl: string
    deeplink: string
    order: number
    isActive: boolean
    checkForCorporates: boolean
  }
  
  export interface BannerSection {
    id: string
    title: string
    props: BannerProps[]
  }