/**
 * ROI Calculator
 * Computes annual savings based on fleet size and current admin overhead
 */

function initROICalculator() {
  const form = document.getElementById('roi-calculator-form');
  const resultsDiv = document.getElementById('roi-results');
  
  if (!form) return;

  // Base metrics from real customer data
  const metrics = {
    adminHours: 10, // hours/week saved
    adminRate: 35, // $/hour
    paymentDaysImprovement: 25, // days faster
    avgJobValue: 1200, // average invoice value
    complianceRiskCost: 5000, // potential fine avoidance
  };

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fleetSize = parseInt(document.getElementById('fleet-size').value) || 5;
    const adminHours = parseInt(document.getElementById('admin-hours').value) || 10;
    
    // Calculate annual savings
    const adminTimeSavings = adminHours * 52 * metrics.adminRate; // per year
    const jobsPerYear = fleetSize * 60; // estimate 60 jobs/pilot/year
    const cashFlowGain = (jobsPerYear * metrics.avgJobValue * 0.1) * (metrics.paymentDaysImprovement / 365);
    const scalingCost = fleetSize > 5 ? 0 : 50000; // no extra hire needed if scaling
    
    const totalSavings = adminTimeSavings + cashFlowGain + scalingCost;
    const monthlyOpEx = fleetSize <= 3 ? 99 : fleetSize <= 10 ? 199 : 299;
    const annualCost = monthlyOpEx * 12;
    const netBenefit = totalSavings - annualCost;
    const roi = ((netBenefit / annualCost) * 100).toFixed(0);
    
    // Show results
    resultsDiv.innerHTML = `
      <div class="roi-result">
        <h3 style="color: #facc15; margin-bottom: 1.5rem;">Your Annual Savings</h3>
        <div class="savings-grid">
          <div class="savings-item">
            <div class="savings-value">$${(adminTimeSavings / 1000).toFixed(0)}K</div>
            <div class="savings-label">Admin Time Saved</div>
          </div>
          <div class="savings-item">
            <div class="savings-value">$${(cashFlowGain / 1000).toFixed(0)}K</div>
            <div class="savings-label">Cash Flow Improvement</div>
          </div>
          <div class="savings-item">
            <div class="savings-value">$${(scalingCost / 1000).toFixed(0)}K</div>
            <div class="savings-label">No Hire Required</div>
          </div>
        </div>
        
        <div style="background: linear-gradient(135deg, #facc15, #ffd952); padding: 2rem; border-radius: 12px; margin-top: 2rem; color: #000;">
          <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">TOTAL ANNUAL BENEFIT</p>
          <p style="font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem;">$${(netBenefit / 1000).toFixed(0)}K</p>
          <p style="font-size: 1.1rem; color: #1f2937;">ROI: <strong>${roi}%</strong></p>
        </div>
        
        <p style="color: #9ca3af; margin-top: 2rem; text-align: center; font-size: 0.95rem;">
          Calculation based on: ${fleetSize} drones, ${adminHours} hrs/week admin time, 60 jobs/pilot/year @ $${metrics.avgJobValue}
        </p>
        
        <div style="margin-top: 2rem; text-align: center;">
          <a href="contact.html" class="btn" style="display: inline-block;">See It In Action</a>
        </div>
      </div>
    `;
    
    resultsDiv.style.display = 'block';
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  
  // Auto-calculate on input change
  document.getElementById('fleet-size')?.addEventListener('change', () => form.dispatchEvent(new Event('submit')));
  document.getElementById('admin-hours')?.addEventListener('change', () => form.dispatchEvent(new Event('submit')));
}

// Auto-init on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initROICalculator);
} else {
  initROICalculator();
}
