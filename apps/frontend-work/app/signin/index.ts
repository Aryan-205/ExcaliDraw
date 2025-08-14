interface Idetails {
  name:string,
  email:string,
  password:string
}

export default  async function Signin(details:Idetails){

  try {

    if (!details.email || !details.password) {
      alert("Please fill in all required fields");
      return { success: false };
    }

    const response = await fetch("http://localhost:3002/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: details.email,
        password: details.password,
      }),
    });

    const result = await response.json();

    if (!response.ok) {

      alert(result.message || "Sign in failed");
      return { success: false };
    }

    localStorage.setItem("token", result.token);
    return { success: true }

  } catch (error) {
    console.error("Sign in error:", error);
    alert("Something went wrong, please try again later.");
  }

}