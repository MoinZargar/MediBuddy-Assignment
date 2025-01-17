import { IconSectionType } from './icon'
import { BannerSectionType } from './banner'
import { HealthCheckupSectionType } from './health-checkup'
import { LifestylePackageSectionType } from './life-style-package';
import { FeedbackSectionType } from './feedback';
import { FAQSection } from './faq';

export type PageContent = IconSectionType & BannerSectionType & HealthCheckupSectionType & LifestylePackageSectionType & FeedbackSectionType & FAQSection;