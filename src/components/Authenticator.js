export function isLoggedIn() {
    return localStrorage.getItem("loggedInUser")
  }