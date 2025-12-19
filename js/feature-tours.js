/**
 * Feature Tours
 * Interactive guided walkthroughs for each feature using Intro.js style tooltips
 */

function initFeatureTours() {
  const tourButtons = document.querySelectorAll('[data-tour-trigger]');
  
  tourButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const featureName = this.getAttribute('data-tour-trigger');
      startTour(featureName);
    });
  });
}

function startTour(featureName) {
  // Hide any existing tour
  const existingOverlay = document.getElementById('tour-overlay');
  if (existingOverlay) existingOverlay.remove();
  
  // Create tour overlay
  const overlay = document.createElement('div');
  overlay.id = 'tour-overlay';
  overlay.innerHTML = `
    <div class="tour-backdrop"></div>
    <div class="tour-tooltip">
      <button class="tour-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      <div class="tour-content"></div>
      <div class="tour-nav">
        <button class="tour-prev">← Back</button>
        <span class="tour-counter"></span>
        <button class="tour-next">Next →</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  
  // Define tours for each feature
  const tours = {
    'job-management': [
      { title: 'Create a Job', text: 'Capture job details: location, client, equipment, pilot assignment.' },
      { title: 'Track Progress', text: 'Update job status from quote → scheduled → flying → completed → invoiced.' },
      { title: 'Link to Flights', text: 'Automatically attach flight logs to jobs for compliance & billing.' },
      { title: 'Invoice in 60s', text: 'Generate professional invoice with one click. Client gets email immediately.' },
    ],
    'flight-logs': [
      { title: 'Auto-Capture', text: 'ColonyCore logs flights automatically from your drone data.' },
      { title: 'FAA Ready', text: 'All required fields: location, duration, drone SN, pilot cert, weather, altitude.' },
      { title: 'Maintenance Tracking', text: 'Track battery cycles, propeller changes, firmware updates in one place.' },
      { title: 'Export & Audit', text: 'Export logs as PDF for FAA audits. Organized compliance records.' },
    ],
    'equipment': [
      { title: 'Asset Registry', text: 'Inventory all drones, batteries, chargers, propellers with serial numbers.' },
      { title: 'Battery Health', text: 'Monitor battery cycle count. Get alerts when batteries need replacement.' },
      { title: 'Utilization Tracking', text: 'See which drones are flying today, which are charging, which need maintenance.' },
      { title: 'Maintenance Scheduler', text: 'Set maintenance intervals. Get reminders before equipment fails.' },
    ],
    'invoicing': [
      { title: 'One-Click Invoice', text: 'Close a job → generate invoice → send to client in 60 seconds.' },
      { title: 'Flexible Pricing', text: 'Charge hourly, per-job, or custom pricing. Auto-calculate expenses & profit.' },
      { title: 'Online Payments', text: 'Customers pay via Stripe. Money hits your account in 1-2 days.' },
      { title: 'Payment Tracking', text: 'See which invoices are paid, overdue, or pending. Auto-send reminders.' },
    ],
  };
  
  const currentTour = tours[featureName] || tours['job-management'];
  let currentStep = 0;
  
  function updateTour() {
    const step = currentTour[currentStep];
    const content = overlay.querySelector('.tour-content');
    const counter = overlay.querySelector('.tour-counter');
    const prevBtn = overlay.querySelector('.tour-prev');
    const nextBtn = overlay.querySelector('.tour-next');
    
    content.innerHTML = `<h3 style="color: #facc15; margin-bottom: 0.5rem;">${step.title}</h3><p style="color: #9ca3af;">${step.text}</p>`;
    counter.textContent = `${currentStep + 1} / ${currentTour.length}`;
    
    prevBtn.disabled = currentStep === 0;
    nextBtn.textContent = currentStep === currentTour.length - 1 ? 'Finish' : 'Next →';
    
    prevBtn.onclick = () => { currentStep--; updateTour(); };
    nextBtn.onclick = () => {
      if (currentStep < currentTour.length - 1) {
        currentStep++;
        updateTour();
      } else {
        overlay.remove();
      }
    };
  }
  
  updateTour();
}

// Auto-init if DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFeatureTours);
} else {
  initFeatureTours();
}
