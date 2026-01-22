import pdfplumber
import json

def extract_resume_info(pdf_path):
    """Extract text and structure from resume PDF"""
    extracted_data = {
        "full_text": "",
        "pages": []
    }
    
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for i, page in enumerate(pdf.pages):
                text = page.extract_text()
                if text:
                    extracted_data["pages"].append({
                        "page_number": i + 1,
                        "text": text
                    })
                    extracted_data["full_text"] += text + "\n\n"
        
        # Save to JSON file
        with open("resume_data.json", "w", encoding="utf-8") as f:
            json.dump(extracted_data, f, indent=2, ensure_ascii=False)
        
        print("✅ Resume extracted successfully!")
        print(f"Total pages: {len(extracted_data['pages'])}")
        print("\n" + "="*60)
        print("EXTRACTED CONTENT:")
        print("="*60)
        print(extracted_data["full_text"])
        
    except Exception as e:
        print(f"❌ Error extracting PDF: {e}")
        return None
    
    return extracted_data

if __name__ == "__main__":
    pdf_path = r"C:\Users\DAT\Desktop\Workspace\Portfolio\my-portfolio\Tran-Thanh-Dat-BE.pdf"
    extract_resume_info(pdf_path)
