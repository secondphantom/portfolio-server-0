import z from "zod";

import { ICourseResponseValidator } from "../../controller/course/course.interface";
import { ResponseCourseGetById } from "../../spec/course/course.response";
import { ServerError } from "../../dto/error";

export class CourseResponseValidator implements ICourseResponseValidator {
  static instance: CourseResponseValidator | undefined;
  static getInstance = () => {
    if (this.instance) return this.instance;
    this.instance = new CourseResponseValidator();
    return this.instance;
  };

  constructor() {}

  private responseCourseGetById = z.object({
    id: z.number(),
    videoId: z.string(),
    language: z.string(),
    title: z.string(),
    description: z.string(),
    summary: z.string().nullable(),
    chapters: z.array(z.object({ time: z.number(), title: z.string() })),
    enrollCount: z.number(),
    duration: z.number(),
    createdAt: z.date(),
    publishedAt: z.date(),
    channel: z.object({
      channelId: z.string(),
      name: z.string(),
    }),
    enrolls: z
      .array(
        z.object({
          userId: z.number(),
          totalProgress: z.number(),
          updatedAt: z.date(),
        })
      )
      .optional(),
    category: z
      .object({
        id: z.number(),
        name: z.string(),
      })
      .nullable(),
  });

  getCourseById = (data: any) => {
    try {
      const dto = this.responseCourseGetById.parse(data);
      return dto;
    } catch (error) {
      throw new ServerError({
        code: 400,
        message: "Invalid Response",
      });
    }
  };
}