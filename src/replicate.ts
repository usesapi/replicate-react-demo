const modelId =
  "3554d9e699e09693d3fa334a79c58be9a405dd021d3e11281256d53185868912";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const createPokemon = async (prompt: string): Promise<string | null> => {
  const res = await fetch(`https://api.replicate.com/v1/predictions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      version: modelId,
      input: {
        prompt,
        num_outputs: 1,
        num_inference_steps: 50,
        guidance_scale: 8,
      },
    }),
  });
  const json = await res.json();
  const id = json["id"];
  if (!id) {
    return null;
  }
  let result = await checkResult(id);
  while (!result) {
    await sleep(1000);
    result = await checkResult(id);
  }
  return result;
};

export const checkResult = async (id: string): Promise<string | null> => {
  const res = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();
  if (!json["completed_at"]) {
    return null;
  }
  return json["output"][0] ?? null;
};
