const token = localStorage.getItem("auth-token");

export async function getRequest(url: string): Promise<Response> {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function postRequest(url: string, body: Object) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    return response;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function patchRequest(url: string, body: Object) {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    return response;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function deleteRequest(url: string) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (e) {
    console.error(e);
  }
}
