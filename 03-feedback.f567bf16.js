const e={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};console.log(e.form),console.log(e.email),console.log(e.textarea),e.form.addEventListener("input",(function(e){localStorage.getItem("feedback-form-state");console.log(e.target.name),console.log(e.target.value),t[e.target.name]=e.target.value;const o=JSON.stringify(t);localStorage.setItem("feedback-form-state",o)})),e.form.addEventListener("submit",(function(e){e.preventDefault()}));localStorage.getItem("feedback-form-state");!function(){const t=localStorage.getItem("feedback-form-state"),o=JSON.parse(t);t&&(e.email.value=o.email||"",e.textarea.value=o.message||"")}();const t={};
//# sourceMappingURL=03-feedback.f567bf16.js.map
