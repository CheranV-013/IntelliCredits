import os
from typing import Dict, Any


def compute_trend_risk(company_id: str) -> Dict[str, Any]:
    use_mock = os.getenv("USE_MOCK_MODELS", "true").lower() == "true"
    if use_mock:
        return {
            "trend_risk_score": 0.58,
            "notes": [
                "Revenue decreasing over last 4 quarters",
                "Debt increasing with higher interest burden",
                "Cash flow volatility detected",
            ],
        }
    return {"trend_risk_score": 0.2, "notes": ["Stable trend"]}
