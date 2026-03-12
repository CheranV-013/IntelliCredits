from pydantic import BaseModel, Field
from typing import List, Dict, Any, Optional


class UploadResponse(BaseModel):
    saved_files: List[str]


class AnalyzeRequest(BaseModel):
    company_id: str
    company_name: str = ""
    document_paths: List[str] = []


class ExtractedFinancials(BaseModel):
    revenue: str
    debt: str
    profit: str
    directors: List[str]
    financial_ratios: Dict[str, float]
    working_capital: str = ""
    assets: str = ""
    liabilities: str = ""


class ResearchInsights(BaseModel):
    news_sentiment: str
    legal_cases: int
    sector_outlook: str
    promoter_risk: str


class TrendSignal(BaseModel):
    trend_risk_score: float
    notes: List[str]


class AnalyzeResponse(BaseModel):
    company_id: str
    credit_score: int
    decision: str
    explanations: Dict[str, float]
    financials: ExtractedFinancials
    research: ResearchInsights
    trend: TrendSignal
    graph_risk_score: float
    cam_pdf_base64: str


class RiskScoreResponse(BaseModel):
    company_id: str
    credit_score: int
    decision: str


class ExplanationResponse(BaseModel):
    company_id: str
    shap_values: Dict[str, float]


class CamResponse(BaseModel):
    company_id: str
    cam_pdf_base64: str
