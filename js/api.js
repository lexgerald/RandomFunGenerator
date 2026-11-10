// Dog CEO: returns { message: "<image url>", status: "success" }
export async function getRandomDog() {
  // NO custom headers — Dog CEO breaks CORS on preflight requests
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!res.ok) throw new Error("Failed to fetch dog image");
  const data = await res.json();
  return data.message;
}

// Advice Slip: returns { slip: { advice, slip_id } }
export async function getRandomAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  if (!res.ok) throw new Error("Failed to fetch advice");
  const data = await res.json();
  return data.slip.advice;
}

// Fetch both at once
export async function getRandomPair() {
  const [image, advice] = await Promise.all([getRandomDog(), getRandomAdvice()]);
  return { image, advice, savedAt: Date.now() };
}