import Layout from "../components/Layout";
import Section from "../components/Section";

export default function Cam() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-3 gap-6">
        <Section title="CAM Summary">
          <p className="text-sm text-steel">Credit score 74. Decision: APPROVE WITH CONDITIONS.</p>
          <div className="mt-4">
            <button className="px-4 py-2 rounded-lg bg-ink text-white">Download PDF</button>
          </div>
        </Section>
        <Section title="Key Risks">
          <ul className="text-sm text-steel space-y-2">
            <li>Debt to equity elevated</li>
            <li>Sector outlook declining</li>
            <li>Promoter litigation flagged</li>
          </ul>
        </Section>
        <Section title="Mitigants">
          <ul className="text-sm text-steel space-y-2">
            <li>DSCR covenant at 1.25x</li>
            <li>Quarterly financial monitoring</li>
            <li>Escrow on large receivables</li>
          </ul>
        </Section>
      </div>

      <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-ink mb-2">Report Viewer</h2>
        <div className="h-80 bg-cloud border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-sm text-steel">
          CAM PDF preview will render here (embed PDF base64 output).
        </div>
      </div>
    </Layout>
  );
}
