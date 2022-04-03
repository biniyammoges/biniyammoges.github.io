import Contact from "@/components/contact/Contact";
import Experiance from "@/components/Experiance";
import Footer from "@/components/Footer";
import Hire from "@/components/Hire";
import Service from "@/components/Service";
import Skill from "@/components/skills/Skill";
import Work from "@/components/works/Work";
import ShowCase from "@/components/showcase/ShowCase";
import Subscribe from "@/components/subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <ShowCase />
      <Service />
      <Work />
      <Skill />
      <Experiance />
      <Hire />
      <Contact />
      <Subscribe />
      <Footer />
    </>
  );
}
