export default function ({ app: { router } }, inject) {
  const CALL_TRACKING_SCRIPT = "//vxml4.plavxml.com/sited/ref/ctrk/<%= options.mid %>-<%= options.cid %>";
  const CALL_TRACKING_URL = "//vxml4.plavxml.com";

  // Fire this function
  router.afterEach((to, from) => {
    // Remove existing Delacon scripts
    document.querySelectorAll(`script`).forEach((element) => {
      if (element.getAttribute("src") != null && element.getAttribute("src").indexOf(CALL_TRACKING_URL) !== -1) {
        element.remove(); // Remove the script tag from DOM
      }
    });

    // Insert new Delacon script
    const plugin = document.createElement("script");
    plugin.setAttribute("src", CALL_TRACKING_SCRIPT);
    plugin.async = true;
    document.head.appendChild(plugin);
  });
}
