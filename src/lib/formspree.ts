export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqpergdz";

export async function submitToFormspree(payload: Record<string, unknown>) {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let message =
      "We couldn't send your enquiry. Please try again, or WhatsApp us on 067 062 2953.";
    try {
      const data = await res.json();
      if (data?.errors?.[0]?.message) message = data.errors[0].message;
    } catch {
      // keep default message
    }
    throw new Error(message);
  }
}
