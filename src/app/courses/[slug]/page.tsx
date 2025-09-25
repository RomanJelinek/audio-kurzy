import type { CSSProperties } from "react";

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { courses, getCourseBySlug } from "@/lib/courses";
import { LessonPlayer } from "./LessonPlayer";
import styles from "./page.module.css";

type CoursePageParams = Promise<{ slug: string }>;

type CoursePageProps = {
  params: CoursePageParams;
};

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Kurz nenalezen",
    };
  }

  return {
    title: `${course.title} – audio kurzy`,
    description: course.description,
  };
}

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const style = {
    "--accent-color": course.accentColor,
    "--accent-light": course.accentLight,
  } as CSSProperties;

  return (
    <div className={styles.page} style={style}>
      <Link href="/" className={styles.backLink}>
        <span aria-hidden="true">←</span>
        Zpět na přehled kurzů
      </Link>

      <header className={styles.header}>
        <div className={styles.headerHero}>
          <span className={styles.courseIcon} aria-hidden="true">
            {course.icon}
          </span>
          <div>
            <span className={styles.headerBadge}>Audio kurz</span>
            <h1>{course.title}</h1>
          </div>
        </div>
        <p>{course.description}</p>
      </header>

      <ol className={styles.lessonList}>
        {course.lessons.map((lesson, index) => (
          <LessonPlayer
            key={lesson.id}
            lesson={lesson}
            index={index}
            courseSlug={course.slug}
          />
        ))}
      </ol>
    </div>
  );
}
