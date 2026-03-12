import Layout from "../components/Layout";
import Section from "../components/Section";
import UploadDropzone from "../components/UploadDropzone";

export default function Upload() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-2 gap-6">
        <Section title="Document Intake">
          <UploadDropzone />
        </Section>
        <Section title="Ingestion Checklist">
          <ul className="text-sm text-steel space-y-2">
            <li>PDF to image conversion at 300 DPI</li>
            <li>OCR + table extraction</li>
            <li>Financial metric normalization</li>
            <li>Director and RPT extraction</li>
            <li>Validation cross-checks</li>
          </ul>
        </Section>
      </div>
    </Layout>
  );
}
