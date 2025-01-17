import axios from 'axios';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import IconSection from '../components/IconSection';
import BannerSection from '../components/BannerSection'; 
import HealthPackagesSection from '../components/HealthPackagesSection';
import BookLabTestSection from '../components/BookLabTestSection';
import LifestylePackageSection from '../components/LifestylePackageSection';
import LabsVisitedSection from '../components/LabsVisitedSection';
import TrustStatSection from '../components/TrustStatsSection';
import FeedbackSection from '../components/FeedbackSection';
import WorkFlowSection from '../components/WorkFlowSection';
import SafeLabsSection from '../components/safeLabsSection';
import FaqSection from '../components/FaqSection';
import ActiveBookingSection from '../components/ActiveBookingSection';
import { PageContent } from '../types/content';

async function getContent(): Promise<PageContent[]> {
   try {
     const response = await axios.get('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
     const content: PageContent[] = response.data[0].page_config;
     return content;
   } catch (error) {
      console.error(error);
      return [];
   }
}

export default async function Home() {
   const content: PageContent[] = await getContent();
   if (!content || content.length === 0) {
       return <div>Loading...</div>;
   }
   return (
    
      <main className="flex flex-col justify-center mx-auto px-4 py-6 space-y-8 lg:px-20">
        <Header />
        <SearchBar/>
        <IconSection content={content[0]}/>
        <BannerSection content={content[1]} /> 
        <HealthPackagesSection content={content[2]} />
        <ActiveBookingSection />
        <BookLabTestSection content={content[2]}/>
        <LabsVisitedSection />
        <TrustStatSection />
        <LifestylePackageSection content={content[3]}/>
        <FeedbackSection content={content[5]}/>
        <WorkFlowSection />
        <SafeLabsSection />
        <FaqSection content={content[6]}/>
      </main>
   
  );
}
