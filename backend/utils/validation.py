from typing import Dict, Any


def validate_financials(data: Dict[str, Any]) -> Dict[str, Any]:
    # Simple sanity check: ensure assets >= liabilities when numeric data present.
    # In production, parse numeric values and perform cross-checks.
    assets = data.get("assets", "")
    liabilities = data.get("liabilities", "")
    if not assets or not liabilities:
        data["validation_flags"] = ["assets_or_liabilities_missing"]
    else:
        data["validation_flags"] = []
    return data
