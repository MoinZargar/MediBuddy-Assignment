export interface DiscountInfo {
    discountPrice: number;
    saleName?: string;
    coupon?: string;
  }
  
  export interface Tags {
    topRightTag?: string;
    bottomTag?: string[];
  }
  
  export interface Package {
    packageType: string;
    packageName: string;
    packageDisplayName: string;
    packageCode: string;
    description: string;
    discount: number;
    isSponsored: boolean;
    minAge?: number;
    maxAge?: number;
    gender?: string;
    testCount: number;
    consultationCount?: number;
    isHomeSampleAvailable: boolean;
    isRadiologyIncluded?: boolean;
    isPopular?: boolean;
    isCovidTest?: boolean;
    cartId?: number;
    isPresentInCart?: boolean;
    isAvailable?: boolean;
    discountInfo: DiscountInfo;
    isCenterVisitPackage?: boolean;
    subCategories: string[];
    instructions?: string[];
    tags: Tags;
    fastingHoursText: string;
    reportsTatText: string;
    testsSummary: string[];
    packageId: number;
    priceRange: number;
    price: number;
    estimatedPrice: number;
    contractId?: number;
    visitType: string[];
    currentVisitType: string;
    discountRuleId?: string;
  }
  
  export interface HealthCheckupSection {
    id: string;
    heading: string;
    categories: {
      [key: string]: string[];
    };
    props: {
      packages: Package[];
    }[];
  }
  