import {
	Button,
	Icon,
	Input,
	PopoverDomRef,
	ResponsivePopover,
	ShellBar,
	ShellBarItem,
	ShellBarItemPropTypes,
} from "@ui5/webcomponents-react";
import React, { useRef, useState } from "react";
import "@ui5/webcomponents-icons/dist/search";
import "@ui5/webcomponents-icons/dist/palette";

export default function Header() {
	const buttonThemeRef = useRef<PopoverDomRef | null>(null);
	const [currentTheme, setCurrentTheme] = useState<string>("sap_horizon");
	const [toggleThemePopUp, setToggleThemePopUp] = useState<boolean>(false);

	const onTogglePopOver: ShellBarItemPropTypes["onClick"] = (e) => {
		buttonThemeRef.current!.opener = e.detail.targetRef;
		setToggleThemePopUp(!toggleThemePopUp);
	};

	return (
		<>
			{" "}
			<ShellBar
				primaryTitle="My Notes"
				secondaryTitle="Demo"
				logo={
					<img
						src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo-Sticker.png"
						alt="ui5-logo-react-webcomponent"
						className=""
						width=""
					/>
				}
				searchField={
					<Input icon={<Icon name="search" />} placeholder="Search notes" />
				}
			>
				<ShellBarItem onClick={onTogglePopOver} icon="palette" text="Themes" />
			</ShellBar>
			<ResponsivePopover ref={buttonThemeRef} open={toggleThemePopUp} />
		</>
	);
}

// function onSelectTheme() {}
