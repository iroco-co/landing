export function irocoAppPath(url: string) {
  const base_url = new URL(url);
  const protocol = base_url.protocol;
  const host = base_url.host;

  return `${protocol}//app.${host}`;
}
