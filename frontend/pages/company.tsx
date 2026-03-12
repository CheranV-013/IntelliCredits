import Layout from "../components/Layout";
import Section from "../components/Section";
import GraphView from "../components/GraphView";

export default function Company() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-3 gap-6">
        <Section title="Company Overview">
          <div className="text-sm text-steel space-y-2">
            <p>Name: Orion Infra Logistics Pvt Ltd</p>
            <p>Sector: Industrial Logistics</p>
            <p>Incorporation: 2016</p>
            <p>Location: Mumbai</p>
          </div>
        </Section>
        <Section title="Financial Highlights">
          <div className="text-sm text-steel space-y-2">
            <p>Revenue: INR 125.4 Cr</p>
            <p>Net Profit: INR 9.8 Cr</p>
            <p>Debt: INR 42.0 Cr</p>
            <p>Working Capital: INR 14.6 Cr</p>
          </div>
        </Section>
        <Section title="Research Signals">
          <div className="text-sm text-steel space-y-2">
            <p>News Sentiment: Negative</p>
            <p>Legal Cases: 3</p>
            <p>Sector Outlook: Declining</p>
            <p>Promoter Risk: Medium</p>
          </div>
        </Section>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <Section title="Promoter Network Graph">
          <GraphView />
        </Section>
        <Section title="Related Party Transactions">
          <ul className="text-sm text-steel space-y-2">
            <li>Lease agreement with Promoter A owned entity</li>
            <li>Service contract with group company</li>
            <li>Outstanding receivable from related firm</li>
          </ul>
        </Section>
      </div>
    </Layout>
  );
}
