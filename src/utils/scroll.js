// Reusable scroll helpers
export function scrollToContact(e) {
  if (e && e.preventDefault) e.preventDefault();
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.hash = "#contact";
  }
}

export default scrollToContact;
