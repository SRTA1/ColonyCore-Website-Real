# Contact Form Backend Integration (Optional)

This document describes how to integrate the contact form with your FastAPI backend instead of using Netlify Forms.

## Current Setup
- **Netlify Forms**: Form submissions are automatically captured and emailed to you
- Access submissions: Netlify Dashboard → Forms → `early-access`

## FastAPI Backend Integration (Optional)

If you want to store submissions in your database or trigger custom workflows, use this FastAPI endpoint:

### Backend Code (FastAPI)

```python
# app/routers/contact.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from datetime import datetime

router = APIRouter()

class EarlyAccessRequest(BaseModel):
    name: str
    email: EmailStr
    company: str | None = None
    operation_size: str | None = None
    message: str | None = None

@router.post("/api/early-access")
async def submit_early_access(request: EarlyAccessRequest):
    """
    Handle early access form submissions.
    
    TODO:
    - Save to database
    - Send notification email
    - Trigger CRM webhook
    """
    
    # Example: Log submission
    print(f"New early access request from {request.name} ({request.email})")
    
    # TODO: Add your logic here
    # - db.early_access_requests.insert(request.dict())
    # - send_email_notification(request)
    # - create_crm_lead(request)
    
    return {"success": True, "message": "Request received"}
```

### Frontend Update

To switch from Netlify Forms to FastAPI, update `contact.html`:

```html
<form id="early-access-form" style="max-width: 600px; margin: 2rem auto;">
  <!-- Same fields as current form -->
  
  <button type="submit" class="btn" style="width: 100%; margin-top: 1rem;">
    Request Early Access
  </button>
</form>

<script>
document.getElementById('early-access-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  try {
    const response = await fetch('https://api.colonycore.io/api/early-access', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      alert('Request submitted! We'll be in touch.');
      e.target.reset();
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    alert('Network error. Please try again.');
  }
});
</script>
```

## Recommendation

- **Start with Netlify Forms** (current setup): Zero backend work, submissions emailed to you
- **Migrate to FastAPI** when you need:
  - Database storage
  - CRM integration (HubSpot, Salesforce, etc.)
  - Custom email workflows
  - Analytics tracking

## Next Steps

1. Check Netlify Dashboard for form submissions after DNS propagates
2. Set up email notifications in Netlify (Settings → Forms → Form notifications)
3. Later: Implement FastAPI endpoint when backend is ready
