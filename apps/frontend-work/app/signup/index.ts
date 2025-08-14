import { useRouter } from "next/navigation";

interface Idetails {
  name:string,
  email:string,
  password:string
}

export default  async function Signup(details:Idetails){

  const router = useRouter()

  try {

    if (!details.email || !details.password) {
      alert("Please fill in all required fields");
      return { success: false };
    }

    const response = await fetch("http://localhost:3002/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:details.name,
        email: details.email,
        password: details.password,
      }),
    });

    const result = await response.json();

    if (!response.ok) {

      alert(result.message || "Sign up failed");
      return { success: false };
    }

    return { success: true }

  } catch (error) {
    console.error("Sign up error:", error);
    alert("Something went wrong, please try again later.");
  }

  
}