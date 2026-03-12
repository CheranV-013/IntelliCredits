from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List, Optional

from agents.orchestrator import run_full_analysis
from models.schemas import (
    UploadResponse,
    AnalyzeRequest,
    AnalyzeResponse,
    RiskScoreResponse,
    ExplanationResponse,
    CamResponse,
)

app = FastAPI(title="CREDITINTEL AI", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"status": "ok", "service": "creditintel-ai"}


@app.post("/upload-documents", response_model=UploadResponse)
async def upload_documents(files: List[UploadFile] = File(...)):
    if not files:
        raise HTTPException(status_code=400, detail="No files provided")
    saved = []
    for f in files:
        content = await f.read()
        if not content:
            continue
        path = f"/tmp/creditintel_{f.filename}"
        with open(path, "wb") as out:
            out.write(content)
        saved.append(path)
    return UploadResponse(saved_files=saved)


@app.post("/analyze-company", response_model=AnalyzeResponse)
async def analyze_company(payload: AnalyzeRequest):
    result = run_full_analysis(payload)
    return AnalyzeResponse(**result)


@app.get("/risk-score", response_model=RiskScoreResponse)
def get_risk_score(company_id: str):
    result = run_full_analysis(AnalyzeRequest(company_id=company_id, company_name=""))
    return RiskScoreResponse(
        company_id=company_id,
        credit_score=result["credit_score"],
        decision=result["decision"],
    )


@app.get("/explanations", response_model=ExplanationResponse)
def get_explanations(company_id: str):
    result = run_full_analysis(AnalyzeRequest(company_id=company_id, company_name=""))
    return ExplanationResponse(company_id=company_id, shap_values=result["explanations"])


@app.get("/generate-cam", response_model=CamResponse)
def generate_cam(company_id: str):
    result = run_full_analysis(AnalyzeRequest(company_id=company_id, company_name=""))
    return CamResponse(company_id=company_id, cam_pdf_base64=result["cam_pdf_base64"])
