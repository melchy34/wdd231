// Set timestamp to current date/time ISO string when page loads
  document.getElementById('timestamp').value = new Date().toISOString();

  // Modal open/close logic with focus management
  let lastFocusedElement;

  document.querySelectorAll('a[data-modal]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      lastFocusedElement = document.activeElement; // save triggering link
      const modalId = link.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.showModal();
        const closeBtn = modal.querySelector('button.close-btn');
        if (closeBtn) closeBtn.focus();
      }
    });
  });

  document.querySelectorAll('dialog button.close-btn').forEach(button => {
    button.addEventListener('click', () => {
      const dialog = button.closest('dialog');
      dialog.close();
      if (lastFocusedElement) lastFocusedElement.focus();
    });
  });

  // Close dialog on backdrop click
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', e => {
      if (e.target === dialog) {
        dialog.close();
        if (lastFocusedElement) lastFocusedElement.focus();
      }
    });
  });

  // Keyboard accessibility: trap focus inside modal and close on Escape
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        e.preventDefault();
        dialog.close();
        if (lastFocusedElement) lastFocusedElement.focus();
      }
      if (e.key === 'Tab') {
        const focusableElements = dialog.querySelectorAll('button.close-btn, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];
        if (!focusableElements.length) return;

        if (e.shiftKey) { // Shift + Tab
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else { // Tab
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    });
  });