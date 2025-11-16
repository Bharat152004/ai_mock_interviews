import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";

// Helper function to generate realistic category comments based on specific skills
function getCategoryComment(category: string, score: number): string {
  const comments: Record<string, Record<string, string>> = {
    "Communication Skills": {
      poor: "The candidate's communication was poor. They avoided answering questions directly and often made jokes or promotional plugs instead of providing substantive responses. There was a lack of structured responses and clear articulation.",
      average:
        "Communication was adequate but lacked clarity in some areas. The candidate should work on providing more structured and direct answers to questions.",
      good: "Good communication skills demonstrated. Responses were generally clear and well-articulated, though some answers could have been more concise.",
      excellent:
        "Excellent communication throughout the interview. The candidate provided clear, structured, and articulate responses to all questions.",
    },
    "Technical Knowledge": {
      poor: "The candidate demonstrated some basic technical knowledge by mentioning concepts and features. However, they failed to elaborate or provide specific examples, indicating a superficial understanding. They did not demonstrate the depth of knowledge expected for the role.",
      average:
        "Demonstrated foundational technical knowledge but lacked depth in certain areas. More practical examples and deeper explanations would strengthen the responses.",
      good: "Strong technical knowledge with good understanding of key concepts. The candidate provided relevant examples and showed practical experience.",
      excellent:
        "Outstanding technical expertise. The candidate demonstrated deep understanding of concepts with specific, relevant examples and showed mastery of the subject matter.",
    },
    "Problem-Solving": {
      poor: "The candidate showed very little problem-solving ability. They avoided addressing the questions directly and did not offer any solutions or approaches to the problems posed. When faced with a challenging question, they admitted they needed to practice, indicating a lack of preparedness.",
      average:
        "Basic problem-solving skills shown, but approaches were not always well-thought-out. More practice with complex scenarios would be beneficial.",
      good: "Solid problem-solving approach demonstrated. The candidate showed logical thinking and provided reasonable solutions to most problems.",
      excellent:
        "Exceptional problem-solving skills. The candidate demonstrated analytical thinking, considered edge cases, and provided well-reasoned solutions to complex problems.",
    },
    "Cultural & Role Fit": {
      poor: "Significant concerns about cultural and role fit. The candidate demonstrated a dismissive attitude and lack of professionalism. Their approach suggests they may not align well with team dynamics and company values.",
      average:
        "Shows potential for cultural fit but needs to demonstrate more alignment with role requirements and company values.",
      good: "Good cultural fit demonstrated. The candidate's values and work style appear to align well with the role and company culture.",
      excellent:
        "Excellent cultural and role fit. The candidate clearly demonstrates alignment with company values and shows enthusiasm for the role and team collaboration.",
    },
    "Confidence & Clarity": {
      poor: "Low confidence and poor clarity in responses. The candidate appeared unprepared and struggled to articulate thoughts coherently. There was noticeable uncertainty in most answers.",
      average:
        "Moderate confidence with some clear moments, but inconsistent. More preparation would help improve clarity and confidence levels.",
      good: "Confident and clear in most responses. The candidate showed good preparation and self-assurance in their answers.",
      excellent:
        "Highly confident with exceptional clarity. The candidate demonstrated strong preparation, self-assurance, and the ability to communicate complex ideas clearly.",
    },
  };

  const categoryComments = comments[category] || {};

  if (score < 30)
    return (
      categoryComments.poor ||
      `${category} needs significant improvement with focused study and practice.`
    );
  if (score < 60)
    return (
      categoryComments.average ||
      `${category} shows basic competency but requires further development.`
    );
  if (score < 85)
    return (
      categoryComments.good ||
      `${category} demonstrates solid capability with room for refinement.`
    );
  return (
    categoryComments.excellent ||
    `${category} shows exceptional mastery and expertise.`
  );
}

const Feedback = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();

  const interview = await getInterviewById(id);
  if (!interview) redirect("/dashboard");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id || "",
  });

  return (
    <section className="section-feedback">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="text-3xl font-semibold text-center">
          Feedback on the Interview -{" "}
          <span className="capitalize">{interview.role}</span> Interview
        </h1>

        <div className="flex flex-row gap-6 items-center">
          {/* Overall Impression */}
          <div className="flex flex-row gap-2 items-center">
            <Image src="/star.svg" width={24} height={24} alt="star" />
            <p className="text-lg">
              Overall Impression:{" "}
              <span className="text-primary-100 font-bold text-xl">
                {feedback?.totalScore || 0}/100
              </span>
            </p>
          </div>

          {/* Date */}
          <div className="flex flex-row gap-2 items-center">
            <Image src="/calendar.svg" width={24} height={24} alt="calendar" />
            <p className="text-lg">
              {feedback?.createdAt
                ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
                : dayjs(interview.createdAt).format("MMM D, YYYY h:mm A")}
            </p>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 mb-8" />

      {/* Final Assessment */}
      <div className="mb-10 p-6 bg-dark-300 rounded-lg border border-gray-700">
        <p className="text-base leading-relaxed text-gray-200">
          {feedback?.finalAssessment ||
            "No feedback available yet. Please complete the interview first."}
        </p>
      </div>

      {/* Interview Breakdown */}
      <div className="flex flex-col gap-8 mb-10">
        <h2 className="text-2xl font-semibold">Breakdown of the Interview:</h2>
        {feedback?.categoryScores &&
          Object.entries(feedback.categoryScores).map(
            ([category, score], index) => (
              <div
                key={index}
                className="bg-dark-300 p-6 rounded-lg border border-gray-700"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xl font-semibold">
                    {index + 1}. {category}
                  </p>
                  <span className="text-2xl font-bold text-primary-100">
                    {score}/100
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                  <div
                    className="bg-primary-100 h-2 rounded-full transition-all"
                    style={{ width: `${score}%` }}
                  ></div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {getCategoryComment(category, score as number)}
                </p>
              </div>
            )
          )}
      </div>

      {/* Two Column Layout for Strengths and Improvements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Strengths */}
        <div className="bg-dark-300 p-6 rounded-lg border border-green-800/30">
          <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center gap-2">
            <span className="text-2xl">✓</span> Strengths
          </h3>
          <ul className="space-y-3">
            {feedback?.strengths?.map((strength, index) => (
              <li key={index} className="text-gray-300 flex gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas for Improvement */}
        <div className="bg-dark-300 p-6 rounded-lg border border-yellow-800/30">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center gap-2">
            <span className="text-2xl">⚠</span> Areas for Improvement
          </h3>
          <ul className="space-y-3">
            {feedback?.areasForImprovement?.map((area, index) => (
              <li key={index} className="text-gray-300 flex gap-3">
                <span className="text-yellow-400 mt-1">•</span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="buttons">
        <Button className="btn-secondary flex-1">
          <Link href="/dashboard" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-primary-200 text-center">
              Back to dashboard
            </p>
          </Link>
        </Button>

        <Button className="btn-primary flex-1">
          <Link
            href={`/interview/${id}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              Retake Interview
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Feedback;
