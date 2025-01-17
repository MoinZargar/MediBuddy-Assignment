import axios from 'axios';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import IconSection from '../components/IconSection';
import BannerSection from '../components/BannerSection'; 
import HealthPackagesSection from '../components/HealthPackagesSection';
import { PageContent } from '../types/content';
import BookLabTestSection from '../components/BookLabTestSection';
import LifestylePackages from '../components/LifestylePackages';
import LabsVisited from '../components/LabsVisited';
import TrustStats from '../components/TrustStats';
import FeedbackSection from '../components/FeedbackSection';
import WorkFlow from '../components/WorkFlow';
import SafeLabsSection from '../components/safeLabsSection';

async function getContent(): Promise<PageContent[]> {
    const response = await axios.get('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config');
    const content: PageContent[] = response.data[0].page_config;
    return content;
}

export default async function Home() {
   const content: PageContent[] = await getContent();
   if (!content || content.length === 0) {
       return null;
   }
   return (
    
      <main className="flex flex-col justify-center mx-auto px-4 py-6 space-y-8 lg:px-20">
        <Header />
        <SearchBar placeholder="Find lab tests, diagnostics centres"/>
        <IconSection content={content[0]}/>
        <BannerSection content={content[1]} /> 
        <HealthPackagesSection content={content[2]} />
        <BookLabTestSection content={content[2]}/>
        <LabsVisited />
        <TrustStats />
        <LifestylePackages content={content[3]}/>
        <FeedbackSection content={content[5]}/>
        <WorkFlow />
        <SafeLabsSection />
      </main>
   
  );
}
