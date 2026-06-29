import { company } from "@/data/company";

function DossierSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-inkline bg-white/[0.035] p-5">
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
        {title}
      </h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <p key={item} className="border-l border-brass/35 pl-3 text-sm leading-7 text-mist">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

export function ClientDossier() {
  return (
    <div className="space-y-6">
      <section className="glass-panel rounded-lg p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
              Entreprise cliente
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-porcelain">
              {company.name}
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-inkline bg-obsidian/35 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-mist">
                  Effectif
                </p>
                <p className="mt-2 text-sm font-medium text-porcelain">
                  {company.headcount}
                </p>
              </div>
              <div className="rounded-md border border-inkline bg-obsidian/35 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-mist">
                  Chiffre d&apos;affaires
                </p>
                <p className="mt-2 text-sm font-medium text-porcelain">
                  {company.revenue}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-porcelain">
              Presentation
            </h3>
            <p className="mt-4 text-base leading-8 text-mist">
              {company.presentation}
            </p>
            <p className="mt-5 text-sm leading-7 text-brass">
              Secteur : {company.sector}
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <DossierSection title="Produits" items={company.products} />
        <DossierSection title="Organisation" items={company.organization} />
        <DossierSection title="Certifications actuelles" items={company.certifications} />
        <DossierSection title="Objectifs strategiques" items={company.strategicObjectives} />
        <DossierSection title="Contraintes" items={company.constraints} />
        <DossierSection title="Risques" items={company.risks} />
      </div>
    </div>
  );
}
