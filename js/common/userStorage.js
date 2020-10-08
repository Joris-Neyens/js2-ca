export function saveToken(token) {
  localStorage.setItem("token", JSON.stringify(token));
}

export function saveUser(name) {
  localStorage.setItem("name", JSON.stringify(name));
}

export function getToken() {
  return getFromStorage("token")
}

export function getUser() {
  const name = getFromStorage("name");

  if (name) {
    return name;
  } else {
    return null;
  }
}

function getFromStorage(key) {
  const storedValue = localStorage.getItem(key);

  if (!storedValue) {
    return null;
  } else {
    return JSON.parse(storedValue);
  }
}
