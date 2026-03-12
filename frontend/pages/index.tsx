import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import Section from "../components/Section";
import TrendChart from "../charts/TrendChart";
import RiskGauge from "../components/RiskGauge";

export default function Dashboard() {
  return (
    <Layout>
      <div className="grid md:grid-cols-4 gap-4">
        <StatCard title="Portfolio Exposure" value="INR 520 Cr" trend="+4.2%" tone="mint" />
        <StatCard title="High Risk Accounts" value="18" trend="-2" tone="sun" />
        <StatCard title="Watchlist" value="42" trend="+7" tone="coral" />
        <StatCard title="Avg Credit Score" value="72" trend="stable" tone="mint" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <Section title="Credit Trend Signals">
          <TrendChart />
        </Section>
        <Section title="Current Recommendation">
          <div className="flex flex-col items-center gap-4">
            <RiskGauge score={74} />
            <div className="text-center">
              <p className="text-sm text-steel">Decision</p>
              <p className="text-xl font-semibold text-ink">APPROVE WITH CONDITIONS</p>
              <p className="text-xs text-steel">Conditions: tighter covenants, quarterly monitoring</p>
            </div>
          </div>
        </Section>
        <Section title="Early Warning Signals">
          <ul className="text-sm text-steel space-y-2">
            <li>Revenue drop in 2 consecutive GST filings</li>
            <li>Negative news sentiment spike</li>
            <li>One new litigation in FY26</li>
          </ul>
        </Section>
      </div>
    </Layout>
  );
}
