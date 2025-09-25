import type { CSSProperties } from "react";

import Link from "next/link";
import styles from "./page.module.css";
import { courses } from "@/lib/courses";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Audio kurzy Studnicka</h1>
      </header>

      <section className={styles.courseList}>
        {courses.map((course) => {
          const style = {
            "--accent-color": course.accentColor,
            "--accent-light": course.accentLight,
          } as CSSProperties;

          return (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className={styles.courseCard}
              style={style}
            >
              <span className={styles.courseIcon} aria-hidden="true">
                {course.icon}
              </span>

              <div className={styles.courseContent}>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
              </div>

              <div className={styles.courseMeta}>
                <span className={styles.lessonCount}>
                  {course.lessons.length} lekcí
                </span>
                <span className={styles.courseArrow} aria-hidden="true">
                  →
                </span>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
