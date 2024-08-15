"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useState, useEffect } from "react";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";

function StartInterview({ params }) {
	const [interviewData, setInterviewData] = useState(null);
	const [mockInterviewQuestion, setMockInterviewQuestion] = useState(null);
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

	useEffect(() => {
		GetInterviewDetails();
	}, []);

	const GetInterviewDetails = async () => {
		try {
			const result = await db
				.select()
				.from(MockInterview)
				.where(eq(MockInterview.mockId, params.interviewId)); // params.interviewId should be a valid UUID string

			if (result.length > 0) {
				const jsonMockResp = JSON.parse(result[0].jsonMockResp);
				console.log(jsonMockResp);

				setMockInterviewQuestion(jsonMockResp);
				setInterviewData(result[0]);
			} else {
				console.log("No interview found with the provided ID.");
			}
		} catch (error) {
			console.error("Error fetching interview details:", error);
		}
	};

	return (
		<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start gap-10">
			<div className="w-full max-w-lg">
				<QuestionsSection 
					mockInterviewQuestion={mockInterviewQuestion}
					activeQuestionIndex={activeQuestionIndex}
				/>
			</div>
			<div className="w-full max-w-lg">
				<RecordAnswerSection />
			</div>
		</div>
	);
}

export default StartInterview;
