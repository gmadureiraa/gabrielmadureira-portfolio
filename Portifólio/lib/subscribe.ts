import type { ActionResult } from "./utils";

export async function subscribe(email: string): Promise<ActionResult<string>> {
  try {
    // TODO: integrate with newsletter provider (Resend, Mailchimp, etc.)
    console.log("Newsletter subscription:", email);
    return {
      success: true,
      data: "Inscricao realizada com sucesso!",
      id: crypto.randomUUID(),
    };
  } catch {
    return {
      success: false,
      message: "Erro ao realizar inscricao. Tente novamente.",
      id: crypto.randomUUID(),
    };
  }
}
