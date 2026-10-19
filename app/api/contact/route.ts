const DEFAULT_API_URL = "https://insurance-management-api-n3cn.onrender.com";

type ContactBody = {
  name?: unknown;
  phone?: unknown;
};

function response(message: string, status: number) {
  return Response.json({ message }, { status });
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return response("Dados de contato inválidos.", 400);
  }

  const name = typeof body.name === "string" ? body.name.trim().replace(/\s+/g, " ") : "";
  const phoneNumber = typeof body.phone === "string" ? body.phone.replace(/\D/g, "") : "";

  if (!name) {
    return response("Informe seu nome.", 400);
  }

  if (!/^\d{10,15}$/.test(phoneNumber)) {
    return response("Informe um telefone com DDD, entre 10 e 15 dígitos.", 400);
  }

  const apiUrl = (process.env.INSURANCE_API_URL || DEFAULT_API_URL).replace(/\/+$/, "");

  try {
    const csrfResponse = await fetch(`${apiUrl}/users/csrf`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!csrfResponse.ok) {
      throw new Error("Não foi possível obter o token CSRF.");
    }

    const csrfPayload = (await csrfResponse.json()) as { csrfToken?: unknown };
    const csrfToken = typeof csrfPayload.csrfToken === "string" ? csrfPayload.csrfToken : "";
    const setCookie = csrfResponse.headers.get("set-cookie");
    const csrfCookie = setCookie?.split(";", 1)[0];

    if (!csrfToken || !csrfCookie) {
      throw new Error("A resposta CSRF não retornou token e cookie.");
    }

    const leadResponse = await fetch(`${apiUrl}/leads`, {
      method: "POST",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cookie: csrfCookie,
        "x-csrf-token": csrfToken,
      },
      body: JSON.stringify({
        name,
        phoneNumber,
      }),
    });

    if (!leadResponse.ok) {
      if (leadResponse.status === 400) {
        return response("Confira o nome e o telefone informados.", 400);
      }

      throw new Error(`A API de leads respondeu com status ${leadResponse.status}.`);
    }

    return response("Contato enviado com sucesso.", 201);
  } catch {
    return response(
      "Não foi possível enviar seu contato agora. Tente novamente em alguns instantes.",
      502,
    );
  }
}
