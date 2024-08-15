"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import web from "./webcam.png";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic } from "lucide-react";

function RecordAnswerSection() {
	const [userAnswer, setUserAnswer] = useState("");
	const {
		error,
		interimResult,
		isRecording,
		results,
		startSpeechToText,
		stopSpeechToText,
	} = useSpeechToText({
		continuous: true,
		useLegacyResults: false,
	});

	useEffect(() => {
		results.forEach((result) => {
			setUserAnswer((prevAns) => prevAns + result?.transcript);
		});
	}, [results]);

	const SaveUserAnswer = () => {
		if (isRecording) {
			stopSpeechToText();
		} else {
			startSpeechToText();
		}
	};

	const [isWebcamActive, setIsWebcamActive] = useState(false);
	const [hasWebcamError, setHasWebcamError] = useState(false);

	useEffect(() => {
		// Try to activate the webcam after a short delay
		const timer = setTimeout(() => {
			setIsWebcamActive(true);
		}, 1000); // Adjust the delay as needed

		return () => clearTimeout(timer); // Clean up the timer on unmount
	}, []);

	const handleUserMediaError = () => {
		// If there's an error accessing the webcam, show the image instead
		setHasWebcamError(true);
		setIsWebcamActive(false);
	};

	return (
		<div className="flex items-center justify-center flex-col">
			<div className="flex flex-col mt-14 justify-center items-center bg-gray-700 rounded-lg p-5">
				{isWebcamActive && !hasWebcamError ? (
					<Webcam
						mirrored={true}
						onUserMediaError={handleUserMediaError}
						className="text-white h-92 w-full z-10"
					/>
				) : (
					<Image
						src={web}
						width={400}
						height={400}
						alt="Camera"
						className="cursor-pointer"
					/>
				)}
			</div>
			<Button
				variant="outline"
				className="my-10"
				onClick={SaveUserAnswer}
			>
				{isRecording ? (
					<h2 className="text-red-700 flex gap-2">
						<Mic className="mr-2" />
						Stop Recording...
					</h2>
				) : (
					"Record Answer"
				)}
			</Button>

			<Button onClick={() => console.log(userAnswer)}>Show User Answer</Button>
		</div>
	);
}

export default RecordAnswerSection;
