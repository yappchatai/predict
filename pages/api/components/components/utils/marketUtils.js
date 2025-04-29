export async function fetchMarketData(region) {
  try {
    const res = await fetch(`/api/zillow?address=${encodeURIComponent(region)}&location=${encodeURIComponent(region)}`);
    return await res.json();
  } catch {
    const fallback = await fetch('/fallback.json');
    return await fallback.json();
  }
}
