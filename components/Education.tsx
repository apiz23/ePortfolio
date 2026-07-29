"use client";

import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart";
import {
	Line,
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Legend,
	Area,
	AreaChart,
} from "recharts";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, TrendingUp, TrendingDown } from "lucide-react";
import { EASE_OUT_EXPO, clipReveal } from "@/lib/animations";
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
} from "./ui/select";
import {
	Timeline,
	TimelineContent,
	TimelineDate,
	TimelineHeader,
	TimelineIndicator,
	TimelineItem,
	TimelineSeparator,
	TimelineTitle,
} from "./reui/timeline";

type Pointer = { sem: number; GPA: number; CPA: number };
type EducationLevel = "diploma" | "bachelor" | "secondary";
type EducationResponse = { chart: Pointer[]; latestCGPA: number | null };

const fetchData = async (
	selectedValue: EducationLevel,
): Promise<EducationResponse> => {
	const res = await fetch(`/api/education?level=${selectedValue}`);
	if (!res.ok) throw new Error("Failed to fetch data");
	return res.json();
};

const educationDetails = [
	{
		level: "bachelor",
		title: "Bachelor of Computer Science — Software Engineering",
		institution: "Universiti Tun Hussein Onn Malaysia (UTHM)",
		period: "2024 - 2026",
		note: "Ongoing · Final year",
		highlights: ["Software Engineering", "System Design", "Software Testing"],
	},
	{
		level: "diploma",
		title: "Diploma in Information Technology",
		institution: "Universiti Tun Hussein Onn Malaysia (UTHM)",
		period: "2021 - 2024",
		note: "Graduated",
		highlights: ["Software Development", "Database", "Web Technology"],
	},
	{
		level: "secondary",
		title: "Mara Junior Science College",
		institution: "Science Stream",
		period: "2017 - 2018",
		note: "SPM: 7A 2B",
		highlights: ["Mathematics", "Physics", "Chemistry"],
	},
];

const timelineColors = ["bg-lime-400", "bg-cyan-400", "bg-muted-foreground/50"];

export default function Education() {
	const sectionRef = useRef<HTMLElement>(null);
	const sectionInView = useInView(sectionRef, { once: true, margin: "-10%" });

	const [selectedValue, setSelectedValue] = useState<EducationLevel>("bachelor");
	const [latestCGPA, setLatestCGPA] = useState<number | null>(null);
	const [chartData, setChartData] = useState<Pointer[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [trend, setTrend] = useState<{
		value: string;
		direction: "up" | "down";
	}>({
		value: "0%",
		direction: "up",
	});

	useEffect(() => {
		const loadData = async () => {
			try {
				setIsLoading(true);
				setError(null);
				const res = await fetchData(selectedValue);
				setChartData(res.chart);
				setLatestCGPA(res.latestCGPA);
				if (res.chart.length >= 2) {
					const lastTwo = res.chart.slice(-2);
					const diff = lastTwo[1].GPA - lastTwo[0].GPA;
					const percent = ((diff / lastTwo[0].GPA) * 100).toFixed(1);
					setTrend({
						value: `${Math.abs(Number(percent))}%`,
						direction: diff >= 0 ? "up" : "down",
					});
				}
			} catch (err) {
				console.error(err);
				setError("Failed to load data");
			} finally {
				setIsLoading(false);
			}
		};
		loadData();
	}, [selectedValue]);

	const chartConfig = {
		GPA: { label: "GPA", color: "hsl(var(--chart-1))" },
		CPA: { label: "CPA", color: "hsl(var(--chart-2))" },
	} satisfies ChartConfig;

	const minGPA =
		chartData.length > 0 ? Math.min(...chartData.map((d) => d.GPA)) : 0;
	const yMin = Math.max(0, Math.floor(minGPA * 10) / 10 - 0.1);

	return (
		<section
			ref={sectionRef}
			id="education"
			className="py-24 border-t border-edge"
		>
			<div className="max-w-6xl mx-auto px-6 sm:px-10">
				<div className="flex items-center gap-3 mb-2">
					<span className="h-px w-6 bg-lime-400" />
					<span className="font-mono text-[11px] uppercase tracking-[0.15em] text-lime-400">
						Education
					</span>
				</div>
				<motion.h2
					variants={clipReveal}
					initial="hidden"
					animate={sectionInView ? "visible" : "hidden"}
					className="font-display text-foreground tracking-[-0.02em] leading-[0.95] mb-12"
					style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
				>
					EDUCATION
				</motion.h2>

				{/* Timeline with dots */}
				<Timeline defaultValue={1} orientation="vertical">
					{educationDetails.map((edu, index) => (
						<TimelineItem
							key={edu.level}
							step={index + 1}
							className="border-t border-edge py-5 group ms-0 mt-0 md:ms-[118px]"
						>
							<TimelineHeader className="flex flex-col md:flex-row md:gap-4">
								<div className="md:w-[100px] shrink-0 pt-0.5">
									<TimelineDate className="font-mono text-[13px] text-muted-foreground mb-0 block">
										{edu.period}
									</TimelineDate>
									<p className="font-mono text-[12px] text-lime-400/70 mt-0.5">
										{edu.note}
									</p>
								</div>
								<div>
									<TimelineTitle className="text-[17px] font-semibold text-foreground mb-1 font-display tracking-[-0.01em]">
										{edu.title}
									</TimelineTitle>
									<TimelineContent className="mt-0">
										<p className="font-mono text-[13px] text-muted-foreground mb-3">
											{edu.institution}
										</p>
										<div className="flex flex-wrap gap-1.5">
											{edu.highlights.map((h) => (
												<span
													key={h}
													className="font-mono text-[12px] text-muted-foreground border border-edge px-2 py-0.5"
												>
													{h}
												</span>
											))}
										</div>
									</TimelineContent>
								</div>
							</TimelineHeader>
							<TimelineIndicator
								className={`${timelineColors[index]} border-2 border-edge w-[11px] h-[11px] rounded-full group-hover/timeline-item:scale-125 transition-transform duration-300`}
							/>
							<TimelineSeparator className="bg-edge" />
						</TimelineItem>
					))}
					<div className="border-t border-edge" />
				</Timeline>

				{/* GPA Chart */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
					transition={{ delay: 0.3, duration: 0.4, ease: EASE_OUT_EXPO }}
					className="mt-12"
				>
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
						<div>
							<p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-1">
								Academic Performance
							</p>
							<h3 className="font-display text-xl tracking-[-0.01em] text-foreground">
								GPA & CGPA over semesters
							</h3>
						</div>
						<Select
							value={selectedValue}
							onValueChange={(value) => setSelectedValue(value as EducationLevel)}
						>
							<SelectTrigger className="w-[160px] border-edge font-mono text-[13px]">
								<SelectValue placeholder="Select level" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="bachelor">Bachelor</SelectItem>
								<SelectItem value="diploma">Diploma</SelectItem>
								<SelectItem value="secondary">Secondary</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{isLoading ? (
						<div className="h-[280px] flex items-center justify-center border border-edge">
							<motion.div
								animate={{ rotate: 360 }}
								transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
								className="h-8 w-8 rounded-full border-2 border-edge border-t-lime-400"
							/>
						</div>
					) : error ? (
						<div className="h-[280px] flex flex-col items-center justify-center gap-3 text-muted-foreground border border-edge">
							<BookOpen className="h-8 w-8" />
							<p className="font-mono text-[13px] text-center">
								Failed to load chart data
							</p>
						</div>
					) : (
						<>
							<div className="h-[300px] w-full border border-edge p-4">
								<ChartContainer config={chartConfig} className="h-full w-full">
									<AreaChart
										accessibilityLayer
										data={chartData}
										margin={{ left: 12, right: 12, top: 16, bottom: 20 }}
									>
										<defs>
											<linearGradient id="gpaGradient" x1="0" y1="0" x2="0" y2="1">
												<stop offset="0%" stopColor="hsl(var(--lime))" stopOpacity={0.2} />
												<stop offset="100%" stopColor="hsl(var(--lime))" stopOpacity={0} />
											</linearGradient>
											<linearGradient id="cpaGradient" x1="0" y1="0" x2="0" y2="1">
												<stop offset="0%" stopColor="hsl(var(--cyan))" stopOpacity={0.15} />
												<stop offset="100%" stopColor="hsl(var(--cyan))" stopOpacity={0} />
											</linearGradient>
										</defs>
										<CartesianGrid vertical={false} stroke="hsl(var(--edge))" />
										<XAxis
											dataKey="sem"
											tickLine={false}
											axisLine={false}
											tickMargin={8}
											tick={{
												fontFamily: "var(--font-mono)",
												fontSize: 10,
												fill: "hsl(var(--muted-foreground))",
											}}
											label={{
												value: "Semester",
												position: "insideBottom",
												offset: -10,
												style: {
													fontFamily: "var(--font-mono)",
													fontSize: 10,
													fill: "hsl(var(--muted-foreground))",
												},
											}}
											tickFormatter={(value) => `Sem ${value}`}
										/>
										<YAxis
											domain={[yMin, 4]}
											tickLine={false}
											axisLine={false}
											tickMargin={8}
											tick={{
												fontFamily: "var(--font-mono)",
												fontSize: 10,
												fill: "hsl(var(--muted-foreground))",
											}}
											tickFormatter={(value) => value.toFixed(2)}
										/>
										<ChartTooltip
											cursor={false}
											content={<ChartTooltipContent indicator="line" />}
										/>
										<Legend
											verticalAlign="top"
											height={36}
											iconType="circle"
											iconSize={8}
											wrapperStyle={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
										/>
										<Area
											type="monotone"
											dataKey="GPA"
											stroke="var(--color-GPA)"
											strokeWidth={2}
											fill="url(#gpaGradient)"
											dot={false}
										/>
										<Area
											type="monotone"
											dataKey="CPA"
											stroke="var(--color-CPA)"
											strokeWidth={2}
											fill="url(#cpaGradient)"
											dot={false}
											strokeDasharray="4 3"
										/>
									</AreaChart>
								</ChartContainer>
							</div>
						</>
					)}
				</motion.div>
			</div>
		</section>
	);
}
