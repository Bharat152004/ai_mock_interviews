import { db } from "@/firebase/admin";

export async function POST(request: Request) {
  try {
    const { userId, secret } = await request.json();

    // Security check - only allow in development
    if (
      process.env.NODE_ENV !== "development" ||
      secret !== "create-sample-data-123"
    ) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!userId) {
      return Response.json({ error: "userId is required" }, { status: 400 });
    }

    const coverImages = [
      "/covers/amazon.png",
      "/covers/facebook.png",
      "/covers/hostinger.png",
      "/covers/pinterest.png",
    ];

    // Sample interviews for "Your Interviews" (completed - finalized: true)
    const completedInterviews = [
      {
        role: "Full Stack",
        type: "Mix Between Behavioral And Technical",
        level: "Senior",
        techstack: ["React", "Node.js", "AWS"],
        questions: [
          "Describe your experience with full-stack development",
          "How do you handle state management in React?",
          "Explain your approach to API design",
          "What AWS services have you worked with?",
          "How do you ensure code quality in your projects?",
        ],
        userId: userId,
        finalized: true,
        coverImage: coverImages[0],
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
      },
      {
        role: "Front End Development",
        type: "Mix Between Behavioral And Technical",
        level: "Mid-Level",
        techstack: ["React", "Next.js", "JavaScript"],
        questions: [
          "What's your experience with Next.js?",
          "How do you optimize React performance?",
          "Explain your CSS methodology",
          "Describe a challenging UI problem you solved",
          "How do you ensure accessibility in your applications?",
        ],
        userId: userId,
        finalized: true,
        coverImage: coverImages[1],
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
      },
    ];

    // Sample interviews for "Take Interviews" (pending - finalized: false)
    const pendingInterviews = [
      {
        role: "Backend Developer",
        type: "Technical",
        level: "Senior",
        techstack: ["Node.js", "Python", "PostgreSQL"],
        questions: [
          "Explain your approach to database design",
          "How do you handle authentication and authorization?",
          "What's your experience with microservices?",
          "How do you optimize database queries?",
          "Describe your testing strategy for APIs",
        ],
        userId: userId,
        finalized: false,
        coverImage: coverImages[2],
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      },
      {
        role: "DevOps Engineer",
        type: "Mix Between Behavioral And Technical",
        level: "Mid-Level",
        techstack: ["Docker", "Kubernetes", "AWS"],
        questions: [
          "What's your experience with containerization?",
          "How do you implement CI/CD pipelines?",
          "Explain your approach to infrastructure as code",
          "How do you handle monitoring and logging?",
          "Describe a time you improved deployment processes",
        ],
        userId: userId,
        finalized: false,
        coverImage: coverImages[3],
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      },
    ];

    // Create completed interviews with feedback
    const completedInterviewIds: string[] = [];
    for (const interview of completedInterviews) {
      const docRef = await db.collection("interviews").add(interview);
      completedInterviewIds.push(docRef.id);
    }

    // Create feedback for completed interviews
    const feedbacks = [
      {
        interviewId: completedInterviewIds[0],
        userId: userId,
        totalScore: 85,
        categoryScores: {
          "Communication Skills": 88,
          "Technical Knowledge": 82,
          "Problem-Solving": 87,
          "Cultural & Role Fit": 85,
          "Confidence & Clarity": 83,
        },
        strengths: [
          "Demonstrated excellent verbal communication throughout the interview, consistently providing clear and well-structured responses to both technical and behavioral questions",
          "Showed strong architectural thinking when discussing full-stack system design, particularly in explaining the separation of concerns between frontend and backend layers",
          "Exhibited impressive problem-solving methodology by breaking down complex scenarios into manageable components and explaining the reasoning behind each decision",
          "Displayed good awareness of best practices including code review processes, testing methodologies, and deployment strategies",
          "Maintained professional demeanor and showed genuine enthusiasm for continuous learning and staying updated with industry trends",
        ],
        areasForImprovement: [
          "Could strengthen responses by incorporating more specific, quantifiable examples from previous projects - for instance, mentioning exact technologies used, team sizes, or measurable outcomes achieved",
          "Should consider discussing edge cases and potential failure scenarios more proactively when presenting solutions, demonstrating defensive programming mindset",
          "Would benefit from deeper elaboration on testing strategies beyond unit tests - including integration testing, E2E testing, and how to balance test coverage with development velocity",
          "Could improve by discussing scalability considerations upfront when designing solutions, including database optimization, caching strategies, and horizontal scaling approaches",
          "Should work on articulating trade-offs more explicitly when comparing different technical approaches, showing critical thinking about when to use specific technologies or patterns",
        ],
        finalAssessment:
          "The candidate demonstrated strong full-stack development capabilities with a solid grasp of modern web technologies and architectural patterns. They communicated technical concepts clearly and showed good problem-solving abilities. Their responses revealed practical experience with React, Node.js, and AWS services. However, the interview would have been strengthened by more concrete examples from real-world projects, including specific challenges faced and how they were overcome. The candidate should focus on deepening their understanding of testing strategies, particularly around integration and end-to-end testing, and be more proactive in discussing scalability and edge cases when proposing solutions. Overall, this is a promising candidate with good fundamentals who would benefit from more hands-on experience with complex, production-scale systems. With some focused growth in the identified areas, they would be well-positioned for senior-level responsibilities.",
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        interviewId: completedInterviewIds[1],
        userId: userId,
        totalScore: 78,
        categoryScores: {
          "Communication Skills": 80,
          "Technical Knowledge": 75,
          "Problem-Solving": 82,
          "Cultural & Role Fit": 78,
          "Confidence & Clarity": 75,
        },
        strengths: [
          "Showed solid understanding of React fundamentals including component lifecycle, hooks, and state management patterns",
          "Demonstrated practical problem-solving approach with a focus on user experience and iterative development",
          "Exhibited genuine enthusiasm for frontend technologies and expressed strong interest in learning advanced concepts",
          "Provided good explanations of CSS methodologies and showed understanding of responsive design principles",
          "Displayed positive attitude and openness to feedback, which are valuable traits for team collaboration",
        ],
        areasForImprovement: [
          "Technical knowledge depth needs improvement, particularly in areas of performance optimization - should study concepts like code splitting, lazy loading, memoization, and virtualization for large lists",
          "Needs to strengthen understanding of advanced React patterns such as compound components, render props, higher-order components, and custom hooks for reusable logic",
          "Should invest time in learning accessibility standards (WCAG guidelines) and implementing ARIA attributes, keyboard navigation, and screen reader support",
          "Could benefit from more experience with state management libraries like Redux, Zustand, or Recoil for complex application state",
          "Needs to develop better understanding of browser developer tools for debugging performance issues and analyzing bundle sizes",
          "Should practice explaining technical concepts more concisely and with specific code examples rather than general descriptions",
        ],
        finalAssessment:
          "The candidate presents as a competent mid-level frontend developer with solid foundational knowledge of React and modern JavaScript. They showed enthusiasm and a positive learning attitude throughout the interview. Their understanding of basic React concepts is sound, and they demonstrated practical problem-solving abilities when presented with UI challenges. However, there are notable gaps in deeper technical knowledge, particularly around performance optimization, advanced React patterns, and web accessibility standards. The candidate's responses were sometimes vague and would have benefited from more specific examples and code demonstrations. Their CSS skills are adequate but could be enhanced with modern approaches like CSS-in-JS or utility-first frameworks. To advance to senior positions, they should focus on: (1) mastering performance optimization techniques and being able to identify bottlenecks, (2) deepening knowledge of accessibility to build inclusive applications, (3) gaining experience with testing frameworks like Jest and React Testing Library, and (4) developing stronger system design thinking for scalable frontend architectures. This candidate has good potential and with focused learning in these areas over the next 6-12 months, could develop into a strong senior frontend engineer.",
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ];

    for (const feedback of feedbacks) {
      await db.collection("feedback").add(feedback);
    }

    // Create pending interviews
    for (const interview of pendingInterviews) {
      await db.collection("interviews").add(interview);
    }

    return Response.json({
      success: true,
      message: "Sample data created successfully",
      created: {
        completedInterviews: completedInterviews.length,
        pendingInterviews: pendingInterviews.length,
        feedback: feedbacks.length,
      },
    });
  } catch (error) {
    console.error("Error creating sample data:", error);
    return Response.json(
      { error: "Failed to create sample data" },
      { status: 500 }
    );
  }
}
