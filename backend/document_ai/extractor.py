import os
from typing import Dict, Any, List
from backend.utils.validation import validate_financials


def extract_financials(document_paths: List[str]) -> Dict[str, Any]:
    """
    Prototype extractor. In production, plug in OCR + LayoutLMv3/Donut/Patram pipeline.
    """
    use_mock = os.getenv("USE_MOCK_MODELS", "true").lower() == "true"
    if use_mock:
        data = {
            "revenue": "INR 125.4 Cr",
            "debt": "INR 42.0 Cr",
            "profit": "INR 9.8 Cr",
            "directors": ["Amit Rao", "Sneha Iyer"],
            "financial_ratios": {
                "debt_to_equity": 1.4,
                "current_ratio": 1.2,
                "interest_coverage": 2.7,
            },
            "working_capital": "INR 14.6 Cr",
            "assets": "INR 180.0 Cr",
            "liabilities": "INR 120.0 Cr",
        }
        return validate_financials(data)

    # Placeholder: insert real model calls and parsers here.
    data = {
        "revenue": "INR 0",
        "debt": "INR 0",
        "profit": "INR 0",
        "directors": [],
        "financial_ratios": {},
        "working_capital": "INR 0",
        "assets": "INR 0",
        "liabilities": "INR 0",
    }
    return validate_financials(data)
