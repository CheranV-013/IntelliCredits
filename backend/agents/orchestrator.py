from typing import Dict, Any
from models.schemas import AnalyzeRequest
from document_ai.extractor import extract_financials
from research.agent import run_research
from graph.graph_service import compute_graph_risk
from risk_engine.trend_model import compute_trend_risk
from risk_engine.scoring import score_credit
from cam_generator.generator import generate_cam_pdf

def run_full_analysis(payload: AnalyzeRequest) -> Dict[str, Any]:
    financials = extract_financials(payload.document_paths)
    research = run_research(payload.company_name)
    graph_risk_score = compute_graph_risk(payload.company_id)
    trend = compute_trend_risk(payload.company_id)

    scoring = score_credit(
        {
            "financials": financials,
            "research": research,
            "graph_risk_score": graph_risk_score,
            "trend": trend,
        }
    )

    cam_payload = {
        "summary": f"Credit score {scoring['credit_score']} with decision {scoring['decision']}.",
        "overview": f"Company ID: {payload.company_id}.",
        "promoter": f"Promoter risk assessed as {research['promoter_risk']}.",
        "financials": f"Revenue {financials['revenue']}, Profit {financials['profit']}, Debt {financials['debt']}",
        "industry": f"Sector outlook is {research['sector_outlook']}",
        "risks": "\n".join(trend["notes"]),
        "recommendation": scoring["decision"],
    }

    cam_pdf_base64 = generate_cam_pdf(cam_payload)

    return {
        "company_id": payload.company_id,
        "credit_score": scoring["credit_score"],
        "decision": scoring["decision"],
        "explanations": scoring["explanations"],
        "financials": financials,
        "research": research,
        "trend": trend,
        "graph_risk_score": graph_risk_score,
        "cam_pdf_base64": cam_pdf_base64,
    }
