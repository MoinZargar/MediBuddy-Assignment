export interface UserTestimonial {
    rating: number;
    content: string;
    name: string;
    location: string;
    days: string;
  }
  
  export interface FeedbackSectionType {
    id: string;
    title: string;
    props: UserTestimonial[];
  }