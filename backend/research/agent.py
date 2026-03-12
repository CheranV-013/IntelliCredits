import os
from typing import Dict, Any


def run_research(company_name: str) -> Dict[str, Any]:
    use_mock = os.getenv("USE_MOCK_MODELS", "true").lower() == "true"
    if use_mock:
        return {
            "news_sentiment": "negative",
            "legal_cases": 3,
            "sector_outlook": "declining",
            "promoter_risk": "medium",
        }

    # Placeholder for LangChain + tools and web search.
    return {
        "news_sentiment": "unknown",
        "legal_cases": 0,
        "sector_outlook": "stable",
        "promoter_risk": "low",
    }
