// Cookie Banner functionality
document.addEventListener('DOMContentLoaded', function() {
  const cookieBanner = document.createElement('div');
  cookieBanner.className = 'cookie-banner';
  cookieBanner.innerHTML = `
    <div class="cookie-banner-content">
      <div class="cookie-banner-text">
        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
      </div>
      <div class="cookie-banner-buttons">
        <button class="btn btn-primary" id="acceptAllCookies">Accept All</button>
        <button class="btn btn-secondary" id="rejectAllCookies">Reject All</button>
        <button class="btn btn-secondary" id="customizeCookies">Customize</button>
      </div>
      <div class="cookie-customize-options" id="cookieOptions">
        <div class="cookie-option essential">
          <input type="checkbox" id="essentialCookies" checked disabled>
          <label for="essentialCookies">Essential Cookies (Required) - Necessary for the website to function properly</label>
        </div>
        <div class="cookie-option">
          <input type="checkbox" id="analyticsCookies">
          <label for="analyticsCookies">Analytics Cookies - Help us understand how visitors interact with our website</label>
        </div>
        <div class="cookie-option">
          <input type="checkbox" id="functionalCookies">
          <label for="functionalCookies">Functional Cookies - Enable enhanced functionality and personalization</label>
        </div>
      </div>
    </div>
  `;

  // Only show banner if cookie preference not set
  if (!localStorage.getItem('cookiePreference')) {
    document.body.appendChild(cookieBanner);
  }

  // Handle customize button
  const customizeBtn = document.getElementById('customizeCookies');
  const optionsDiv = document.getElementById('cookieOptions');
  
  customizeBtn?.addEventListener('click', () => {
    optionsDiv?.classList.toggle('active');
  });

  // Handle accept all
  document.getElementById('acceptAllCookies')?.addEventListener('click', () => {
    setCookiePreference('all');
    removeBanner();
  });

  // Handle reject all
  document.getElementById('rejectAllCookies')?.addEventListener('click', () => {
    setCookiePreference('essential');
    removeBanner();
  });

  // Save cookie preferences
  function setCookiePreference(preference) {
    localStorage.setItem('cookiePreference', preference);
    
    // Here you would typically set actual cookies based on preferences
    if (preference === 'all') {
      // Set all cookie types
      console.log('Setting all cookies');
    } else {
      // Set only essential cookies
      console.log('Setting only essential cookies');
    }
  }

  // Remove banner
  function removeBanner() {
    cookieBanner.remove();
  }
});