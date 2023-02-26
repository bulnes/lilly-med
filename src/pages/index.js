import { ClubCard } from "@/components/ClubCard/ClubCard";
import { HelpCard } from "@/components/HelpCard/HelpCard";
import { dataConfig } from "@/data/global";
import { ProcedureCard } from "@/components/ProcedureCard/ProcedureCard";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { Section } from "@/components/Section/Section";
import { Slider } from "@/components/Slider/Slider";
import Head from "next/head";

export default function Home({ clubs, helpCards, procedures }) {
  const { seoGlobal } = dataConfig;

  return (
    <>
      <Head>
        <title>{seoGlobal.title}</title>
      </Head>
      <Section>
        <SectionHeader>
          <h2>Conheça os nossos clubes</h2>
          <p>
            Descubra o Club de Estética mais completo do Brasil por um preço
            fixo.
          </p>
        </SectionHeader>

        <Slider>
          {clubs.map((club, key) => (
            <ClubCard key={key} {...club} />
          ))}
        </Slider>
      </Section>

      <Section>
        <SectionHeader>
          <h2>Como podemos te ajudar?</h2>
          <p>Gostaríamos de saber o que te incomoda</p>
        </SectionHeader>
      </Section>

      <Section>
        <SectionHeader>
          <h2>Tratamentos mais procurados</h2>
          <p>Conheça nossos protocolos mais queridos</p>
        </SectionHeader>
      </Section>

      <Section>
        <SectionHeader>
          <h2>Nossos Tratamentos</h2>
          <p>Especiais para você</p>
        </SectionHeader>
      </Section>

      {/* <SectionHeader /> */}

      {/* {procedures.map((procedure, key) => (
        <ProcedureCard key={key} procedure={procedure} />
      ))} */}

      {/* {helpCards.map((helpCard, key) => (
        <HelpCard key={`helpCard${key}`} helpData={helpCard} />
      ))} */}

      {/* {clubs.map((club, key) => (
        <ClubCard key={key} {...club} />
      ))} */}
    </>
  );
}

export async function getStaticProps() {
  const { clubs, helpCards, procedures } = dataConfig;

  return {
    props: {
      clubs: Object.keys(clubs).map((key) => clubs[key]),
      helpCards,
      procedures,
    },
  };
}
