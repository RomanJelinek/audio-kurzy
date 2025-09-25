"use client";

import { useRef, useCallback } from "react";

import type { Lesson } from "@/lib/courses";
import styles from "./page.module.css";

type LessonPlayerProps = {
  lesson: Lesson;
  index: number;
};

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function LessonPlayer({ lesson, index }: LessonPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePointClick = useCallback((time: number) => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.currentTime = time;
    if (audio.paused) {
      audio.play().catch(() => {
        // Ignore play errors (autoplay restrictions etc.)
      });
    }
  }, []);

  return (
    <li className={styles.lessonItem}>
      <div className={styles.lessonHeader}>
        <span className={styles.lessonIndex}>{index + 1}.</span>
        <div>
          <h2>{lesson.title}</h2>
          {lesson.duration ? (
            <p className={styles.lessonDuration}>{lesson.duration}</p>
          ) : null}
        </div>
      </div>

      {lesson.bulletPoints?.length ? (
        <ul className={styles.lessonPoints}>
          {lesson.bulletPoints.map((point) => (
            <li key={`${lesson.id}-${point.time}`}>
              <button
                type="button"
                className={styles.lessonPointButton}
                onClick={() => handlePointClick(point.time)}
              >
                <span>{point.label}</span>
                <span className={styles.lessonPointTime}>{formatTime(point.time)}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <audio className={styles.audioPlayer} controls preload="none" ref={audioRef}>
        <source src={lesson.audioUrl} type="audio/mpeg" />
        Váš prohlížeč nepodporuje přehrávání audia.
      </audio>
    </li>
  );
}
