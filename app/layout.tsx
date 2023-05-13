import { ClerkProvider } from "@clerk/nextjs";
import { StyleProvider } from "./style";

import type { PropsWithChildren } from "react";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<ClerkProvider>
			<html lang="en">
				<StyleProvider>{children}</StyleProvider>
			</html>
		</ClerkProvider>
	);
}