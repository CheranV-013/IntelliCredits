import Layout from "../components/Layout";
import Section from "../components/Section";
import ExplanationPanel from "../components/ExplanationPanel";
import TrendChart from "../charts/TrendChart";

const shap = {
  debt_to_equity: -0.19,
  news_sentiment: -0.14,
  graph_risk_score: -0.11,
  trend_risk_score: -0.09,
  profitability: 0.07
};

export default function Risk() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-2 gap-6">
        <Section title="Explainable Decision Factors">
          <ExplanationPanel data={shap} />
        </Section>
        <Section title="Trend Signals">
          <TrendChart />
          <ul className="mt-3 text-sm text-steel space-y-2">
            <li>Revenue decreasing over last 4 quarters</li>
            <li>Debt increasing with higher interest burden</li>
            <li>Cash flow volatility detected</li>
          </ul>
        </Section>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <Section title="Graph Risk Score">
          <p className="text-3xl font-semibold text-ink">0.62</p>
          <p className="text-sm text-steel">Promoter overlap + legal case exposure</p>
        </Section>
        <Section title="Sector Outlook">
          <p className="text-3xl font-semibold text-ink">Declining</p>
          <p className="text-sm text-steel">Freight demand softening in FY26</p>
        </Section>
        <Section title="Early Warning System">
          <ul className="text-sm text-steel space-y-2">
            <li>GST revenue drop of 12% YoY</li>
            <li>Litigation flagged in eCourts</li>
            <li>Negative media spike</li>
          </ul>
        </Section>
      </div>
    </Layout>
  );
}
