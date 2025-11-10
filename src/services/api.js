const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"

export async function fetchCourses(){
    const res = await fetch(`${API_URL}/courses`)
    if(!res.ok){
        console.error("Failed to fetch courses", res.status)
    return []
  }
  const data = await res.json()
  return data
}
