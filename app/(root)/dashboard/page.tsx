import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";
import CreateSampleDataButton from "@/components/CreateSampleDataButton";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getPendingInterviewsByUserId,
} from "@/lib/actions/general.action";

async function Dashboard() {
  const user = await getCurrentUser();

  const [completedInterviews, pendingInterviews] = await Promise.all([
    getInterviewsByUserId(user?.id || ""),
    getPendingInterviewsByUserId(user?.id || ""),
  ]);

  const hasCompletedInterviews = (completedInterviews?.length ?? 0) > 0;
  const hasPendingInterviews = (pendingInterviews?.length ?? 0) > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <div className="flex justify-between items-center">
          <h2>Your Interviews</h2>
          {!hasCompletedInterviews && !hasPendingInterviews && (
            <CreateSampleDataButton userId={user?.id} />
          )}
        </div>

        <div className="interviews-section">
          {hasCompletedInterviews ? (
            completedInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>You haven&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="interviews-section">
          {hasPendingInterviews ? (
            pendingInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>
              No interviews available. Create one by clicking &quot;Start an
              Interview&quot;
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default Dashboard;
