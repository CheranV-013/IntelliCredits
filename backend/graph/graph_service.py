import os
from typing import Dict, Any


def compute_graph_risk(company_id: str) -> float:
    # In production, query Neo4j + PyTorch Geometric model.
    use_mock = os.getenv("USE_MOCK_MODELS", "true").lower() == "true"
    if use_mock:
        return 0.62
    return 0.2
