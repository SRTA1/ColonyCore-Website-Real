/**
 * Social Proof Widget
 * Displays rotating notifications of user actions (signups, activity, etc)
 * Usage: Include this script and call initSocialProof()
 */

// Sample social proof events
const socialProofEvents = [
  { name: "Michael Chen", location: "Austin, TX", action: "started their free trial", timestamp: 5 },
  { name: "Sarah Williams", location: "Denver, CO", action: "just logged 12 flights", timestamp: 12 },
  { name: "James Rodriguez", location: "Miami, FL", action: "upgraded to Professional plan", timestamp: 23 },
  { name: "Emily Thompson", location: "Portland, OR", action: "started their free trial", timestamp: 38 },
  { name: "David Park", location: "Phoenix, AZ", action: "activated job management", timestamp: 45 },
  { name: "Jessica Martinez", location: "San Diego, CA", action: "processed their first invoice", timestamp: 67 },
  { name: "Robert Wilson", location: "Atlanta, GA", action: "invited their team", timestamp: 89 },
  { name: "Lisa Anderson", location: "Seattle, WA", action: "started their free trial", timestamp: 102 },
  { name: "Kevin Brown", location: "Houston, TX", action: "reached 100 flight hours", timestamp: 145 },
  { name: "Amanda Davis", location: "Los Angeles, CA", action: "enabled compliance reports", timestamp: 167 },
];

function initSocialProof() {
  const container = document.getElementById('social-proof-widget');
  if (!container) return;

  let currentIndex = 0;

  function showNotification() {
    const event = socialProofEvents[currentIndex];
    const timeAgo = formatTimeAgo(event.timestamp);
    
    const notification = document.createElement('div');
    notification.className = 'social-proof-notification';
    notification.innerHTML = `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <div style="flex: 1;">
          <p style="margin: 0; color: #e5e7eb; font-size: 0.95rem;">
            <strong style="color: #facc15;">${event.name}</strong> from ${event.location}
          </p>
          <p style="margin: 0.25rem 0 0 0; color: #9ca3af; font-size: 0.85rem;">
            ${event.action} • ${timeAgo}
          </p>
        </div>
      </div>
    `;

    // Clear previous notification
    container.innerHTML = '';
    container.appendChild(notification);

    // Add entrance animation
    notification.style.animation = 'slideIn 0.4s ease-out';

    // Move to next event
    currentIndex = (currentIndex + 1) % socialProofEvents.length;

    // Schedule next notification (change every 5 seconds)
    setTimeout(showNotification, 5000);
  }

  // Show first notification immediately
  showNotification();
}

function formatTimeAgo(minutes) {
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

// Auto-init if DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSocialProof);
} else {
  initSocialProof();
}
