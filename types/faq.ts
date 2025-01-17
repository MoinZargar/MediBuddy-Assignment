export interface FAQPoint {
    idx?: number;
    pnt: string; 
    img?: string; 
  }
  
  export interface FAQItem {
    id: number;
    type?: number; 
    question: string;
    answer?: string;
    points: FAQPoint[]; 
    isExpanded: boolean; 
    icon: string; 
  }
  
  export interface FAQSection {
    id: string;
    title: string;
    props: FAQItem[]; 
  }
  