import React from "react";

const Toast = () => {
  return (
    <div class="toast-container">
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <img src="..." class="rounded me-2" alt="..." />
          <strong class="me-auto">Bootstrap</strong>
          <small class="text-muted">just now</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">See? Just like this.</div>
      </div>

      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <img src="..." class="rounded me-2" alt="..." />
          <strong class="me-auto">Bootstrap</strong>
          <small class="text-muted">2 seconds ago</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">Heads up, toasts will stack automatically</div>
      </div>
    </div>
  );
};

export default Toast;