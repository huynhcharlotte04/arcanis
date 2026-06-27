import { company } from "@/data/company";

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-inkline bg-white/[0.03] p-5">
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
        {title}
      </h2>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-mist">
        {items.map((item) => (
          <li key={item} className="border-l border-brass/35 pl-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CompanyProfilePanel() {
  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-lg p-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm text-mist">Entreprise virtuelle</p>
            <h2 className="mt-2 text-3xl font-semibold text-porcelain">
              {company.name}
            </h2>
          </div>
          <p className="text-base leading-8 text-mist">{company.context}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Secteur", company.sector],
          ["Effectif", company.headcount],
          ["Chiffre d'affaires", company.revenue]
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-inkline bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-mist">{label}</p>
            <p className="mt-3 text-base font-medium leading-7 text-porcelain">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <InfoList title="Clients" items={company.clients} />
        <InfoList title="Objectifs" items={company.objectives} />
        <InfoList title="Contraintes" items={company.constraints} />
        <InfoList title="Risques" items={company.risks} />
      </div>
    </div>
  );
}
