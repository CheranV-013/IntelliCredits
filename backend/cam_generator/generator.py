import base64
import io
from typing import Dict, Any
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas


def generate_cam_pdf(payload: Dict[str, Any]) -> str:
    buffer = io.BytesIO()
    c = canvas.Canvas(buffer, pagesize=LETTER)
    width, height = LETTER

    y = height - inch
    c.setFont("Helvetica-Bold", 14)
    c.drawString(inch, y, "Credit Appraisal Memo (CAM)")

    c.setFont("Helvetica", 10)
    y -= 0.5 * inch

    sections = [
        ("Executive Summary", payload.get("summary", "")),
        ("Company Overview", payload.get("overview", "")),
        ("Promoter Analysis", payload.get("promoter", "")),
        ("Financial Analysis", payload.get("financials", "")),
        ("Industry Analysis", payload.get("industry", "")),
        ("Risk Assessment", payload.get("risks", "")),
        ("Final Recommendation", payload.get("recommendation", "")),
    ]

    for title, body in sections:
        if y < 2 * inch:
            c.showPage()
            y = height - inch
        c.setFont("Helvetica-Bold", 11)
        c.drawString(inch, y, title)
        y -= 0.25 * inch
        c.setFont("Helvetica", 10)
        for line in body.split("\n"):
            if y < 1.5 * inch:
                c.showPage()
                y = height - inch
            c.drawString(inch, y, line[:110])
            y -= 0.2 * inch
        y -= 0.1 * inch

    c.save()
    pdf_bytes = buffer.getvalue()
    buffer.close()
    return base64.b64encode(pdf_bytes).decode("utf-8")
