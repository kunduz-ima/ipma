import Header from "@/components/Header/Header";
import Speakers from "@/components/Speakers/Speakers";
import Programs from "@/components/Programs/Programs";
import Organizers from "@/components/Organizers/Organizers";
import Registration from "@/components/Registration/Registration";
import Contacts from "@/components/Contacts/Contacts";
import homepageContent from '../data/homepage-content.json';
import Hero from "@/components/Hero/Hero";
//import StrapiContent from '../../src/lib/strapi-client';

export default function Home() {
  return (
    <main className="flex-1 w-full px-0">
      <Header  
        navigation={homepageContent.navigation} 
      />

      <Hero heroData={homepageContent.hero}/>
      
      <section id="speakers">
        <Speakers {...homepageContent.sections.speakers} />
      </section>
      
      <section id="programs" className=" px-6 py-8">
        <Programs {...homepageContent.sections.programs} />
      </section>
      
      <section id="organizers" className="max-w-7xl mx-auto px-6 py-8">
        <Organizers {...homepageContent.sections.organizers} />
      </section>
      
      <section id="registration" className="max-w-7xl mx-auto px-6 py-8">
        <Registration {...homepageContent.sections.registration} />
      </section>
      
      <section id="contacts" className="max-w-7xl mx-auto px-6 py-8">
        <Contacts {...homepageContent.sections.contacts} />
      </section>
    </main>
  );
}