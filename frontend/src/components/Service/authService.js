export function getUserDetail() {
  return localStorage.getItem("jwtToken");
}

export function getToken() {
  return `${getUserDetail()}`;
}
