
const postURL ="http://localhost:8080/posts"   // aqui va la api de Mario




export const newPost = async (data) => {
    const response = await fetch(postURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  };
