/* eslint-disable no-console, no-unused-vars */
import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { compareSync } from "bcrypt-ts";

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();
		const { email, password } = data;
		const existingUser = await db.user.findFirst({
			where: {
				email,
			},
		});
		if (!existingUser) {
			return NextResponse.json(
				{
					data: null,
					error: "Wrong credentials",
				},
				{ status: 403 }
			);
		}
		const isCorrectPassword = compareSync(password, existingUser.password);
		if (!isCorrectPassword) {
			return NextResponse.json(
				{
					data: null,
					error: "Wrong credentials",
				},
				{ status: 403 }
			);
		}
		const { password: detachPassword, ...others } = existingUser;
		return NextResponse.json(
			{
				data: others,
				error: null,
				message: "successful",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				data: null,
				error: "something went wrong",
			},
			{ status: 500 }
		);
	}
}
