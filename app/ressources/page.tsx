import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { SectionHeader } from "@/components/SectionHeader";

const resources = [
  {
    title: "COBAZ",
    text: "Consulter les normes et referentiels pour verifier les exigences, les champs d'application et les preuves attendues."
  },
  {
    title: "IA comme support de recherche",
    text: "Structurer une investigation, comparer des familles de referentiels et preparer des hypotheses a verifier."
  },
  {
    title: "Internet",
    text: "Identifier des retours d'experience, secteurs d'application, enjeux de certification et signaux de marche."
  },
  {
    title: "Documents internes",
    text: "Exploiter les informations disponibles sur les processus, contraintes, risques et objectifs d'ARCANIS Industries."
  }
];

export default function ResourcesPage() {
  return (
    <AppShell currentStep="ressources">
      <SectionHeader eyebrow="Ressources de decision" title="S'appuyer sur les bonnes sources">
        Les consultants peuvent mobiliser plusieurs ressources pour transformer
        un contexte d&apos;entreprise en recommandation defendable.
      </SectionHeader>

      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <article key={resource.title} className="glass-panel rounded-lg p-6">
            <h2 className="text-xl font-semibold text-porcelain">
              {resource.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-mist">{resource.text}</p>
          </article>
        ))}
      </div>

      <section className="mt-6 rounded-lg border border-copper/40 bg-copper/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">
          Point d&apos;attention
        </p>
        <p className="mt-4 max-w-4xl text-lg leading-9 text-porcelain">
          ARCANIS ne remplace pas les referentiels. ARCANIS sert a prendre une
          decision professionnelle a partir des ressources disponibles, du
          contexte d&apos;entreprise et du jugement des consultants.
        </p>
      </section>

      <div className="mt-8">
        <Link
          href="/recommandation"
          className="inline-flex rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-obsidian transition hover:bg-porcelain"
        >
          Formuler la recommandation
        </Link>
      </div>
    </AppShell>
  );
}
