import React from "react"
import course1 from "../assets/images/course1.jpg"
import course2 from "../assets/images/course2.jpg"
import course3 from "../assets/images/course3.jpg"
import CourseCard from "./CourseCard"

export default function CourseList(){

	// Lista fake de cursos (iremos integrar com backend depois)
  const courses = [
    {
      id: 1,
      title: "UI/UX Design for Beginners",
      author: "Deise Martin",
      price: "$69.99",
      image: course1,
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      author: "Alexsandro Antonio",
      price: "$99.99",
      image: course2,
    },
    {
      id: 3,
      title: "Python Programming Mastery",
      author: "	Adriana Roza",
      price: "$89.99",
      image: course3,
    }
  ]

    return(
        <section className="w-full max-w-6xl mx-auto px-6 mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                Cursos Populares
            </h2>
            <p className="text-center text-gray-600 mt-2 mb-10">
              Escolha entre os melhores cursos criados por instrutores especializados.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </section>
    )
}