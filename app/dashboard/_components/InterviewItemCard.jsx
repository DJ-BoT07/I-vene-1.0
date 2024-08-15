"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function InterviewItemCard({ interview }) {
    const router = useRouter();
    const onStart=()=>{
        router.push(`/dashboard/interview/${interview?.mockId}`)
    }

    const onFeedback=()=>{
        router.push(`/dashboard/interview/${interview?.mockId}/feedback`)
    }
	return (
		<div className="border shadow-sm rounded-lg p-3 hover:scale-105 transition-all">
			<h2 className="font-bold text-blue-700">{interview?.jobPosition}</h2>
			<h2 className="text-sm text-gray-500">
				{interview?.jobExperience} Years of Experience
			</h2>
			<h2 className="text-xs text-gray-400">
				Created At: {interview.createdAt}
			</h2>
			<div className="flex justify-between mt-2 gap-5">
				<Button size="small" variant="outline" className=" w-full"
                onClick={onFeedback}
                >
					Feedback
				</Button>
				<Button size="small" className="w-full"
                onClick={onStart}
                >
					Start
				</Button>
			</div>
		</div>
	);
}
export default InterviewItemCard;
