(function () {
  var path = (window.location.pathname || "").toLowerCase();
  if (!/\/gm\/|\/gm\.html$/.test(path)) {
    return;
  }

  var storageKey = "eutheria_gm_access";
  var password = "Gamemaster";

  try {
    if (window.localStorage.getItem(storageKey) === "granted") {
      return;
    }
  } catch (error) {
    // Fall through to prompt if storage is unavailable.
  }

  var granted = false;
  for (var attempt = 0; attempt < 3; attempt += 1) {
    var input = window.prompt("Enter the GM Section password:");
    if (input === null) {
      break;
    }
    if (input === password) {
      granted = true;
      break;
    }
    window.alert("Incorrect password.");
  }

  if (granted) {
    try {
      window.localStorage.setItem(storageKey, "granted");
    } catch (error) {
      // Ignore storage failures; access remains valid for the current load.
    }
    return;
  }

  document.title = "GM Section Locked";
  document.body.innerHTML =
    '<main style="max-width: 42rem; margin: 4rem auto; padding: 0 1rem; font-family: sans-serif; line-height: 1.6;">' +
    "<h1>GM Section Locked</h1>" +
    "<p>This section is protected by a simple client-side password gate.</p>" +
    '<p><a href="../">Return to the main wiki</a></p>' +
    "</main>";
})();
