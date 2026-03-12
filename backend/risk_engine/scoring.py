from typing import Dict, Any


def score_credit(features: Dict[str, Any]) -> Dict[str, Any]:
    # Prototype scoring rule. Replace with XGBoost/LightGBM/CatBoost ensemble.
    base = 78
    if features["research"]["news_sentiment"] == "negative":
        base -= 8
    if features["graph_risk_score"] > 0.6:
        base -= 6
    if features["trend"]["trend_risk_score"] > 0.5:
        base -= 5
    if features["financials"]["financial_ratios"].get("debt_to_equity", 0) > 1.5:
        base -= 5

    credit_score = max(0, min(100, base))
    if credit_score > 80:
        decision = "APPROVE"
    elif credit_score >= 60:
        decision = "APPROVE WITH CONDITIONS"
    else:
        decision = "REJECT"

    explanations = {
        "debt_to_equity": -0.19,
        "news_sentiment": -0.14,
        "graph_risk_score": -0.11,
        "trend_risk_score": -0.09,
        "profitability": 0.07,
    }

    return {
        "credit_score": credit_score,
        "decision": decision,
        "explanations": explanations,
    }
