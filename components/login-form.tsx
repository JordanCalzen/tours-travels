"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Info, Mail, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "./ui/card";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export type LoginProps = {
	email: string;
	password: string;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function LoginForm() {
	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm<LoginProps>();

	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const router = useRouter();

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	// Clear error when user types in any field
	const clearError = () => {
		if (error) {
			setError("");
		}
	};

	async function formSubmit(data: LoginProps) {
		setLoading(true);
		try {
			const res = await fetch(`${baseUrl}/api/v1/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (res.status === 403) {
				setLoading(false);
				setError("Wrong Credentials");
				toast.error("You Entered Wrong Credentials");
			} else if (res.status === 201) {
				setLoading(false);
				toast.success("You are Welcome🎉");
				reset();
				router.push("/");
				router.refresh();
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	return (
		<Card className="w-full mt-8  md:max-w-md max-w-[315px] mx-auto bg-white p-6 border rounded-lg shadow-md">
			<div className="space-y-6">
				<div className="space-y-2 text-center">
					<h1 className="text-2xl font-bold">Login into your account</h1>
					<p className="text-muted-foreground">
						Fill in your details for a personalized experience
					</p>
				</div>

				<form className="space-y-4" onSubmit={handleSubmit(formSubmit)}>
					<div className="space-y-2">
						<Label htmlFor="email">Enter Email</Label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
								<Mail className="h-4 w-4" />
							</div>
							<Input
								id="email"
								type="email"
								placeholder="name@company.com"
								className="pl-10"
								{...register("email", { required: true })}
								onInput={clearError}
							/>
							{errors.email && (
								<span className="text-red-700">This field is required</span>
							)}
							<div className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground">
								<Info className="h-4 w-4" />
							</div>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
								<Lock className="h-4 w-4" />
							</div>
							<Input
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="••••••"
								className="pl-10"
								{...register("password", { required: true })}
								onInput={clearError}
							/>
							{errors.password && (
								<span className="text-red-700">This field is required</span>
							)}

							<Button
								type="button"
								variant="ghost"
								size="icon"
								className="absolute inset-y-0 right-0 flex items-center pr-3"
								onClick={togglePasswordVisibility}
							>
								{showPassword ? (
									<EyeOff className="h-4 w-4 text-muted-foreground" />
								) : (
									<Eye className="h-4 w-4 text-muted-foreground" />
								)}
								<span className="sr-only">
									{showPassword ? "Hide password" : "Show password"}
								</span>
							</Button>
						</div>
					</div>
					{error && <p className="text-red-700">{error}</p>}

					{loading ? (
						<Button
							disabled
							className="w-full flex items-center justify-center gap-4 bg-purple-500 hover:bg-purple-600"
						>
							<Loader2 className="w-4 h-4 animate-spin" />
							Logging in...
						</Button>
					) : (
						<Button
							type="submit"
							className="w-full bg-purple-600 hover:bg-purple-700"
						>
							Login
						</Button>
					)}

					<div className="text-center text-sm">
						Don{"'"}t have an account?{" "}
						<Link
							href="/signup"
							className="text-purple-600 hover:underline font-medium"
						>
							Sign Up
						</Link>
					</div>

					<div className="text-center text-xs text-muted-foreground">
						By Logging in, you agree to our{" "}
						<Link href="/terms" className="text-purple-600 hover:underline">
							terms
						</Link>
					</div>
				</form>
			</div>
		</Card>
	);
}
