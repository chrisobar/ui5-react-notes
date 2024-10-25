import {
  Button,
  Icon,
  Input,
  List,
  ListItemStandard,
  PopoverDomRef,
  ResponsivePopover,
  ShellBar,
  ShellBarItem,
  ShellBarItemPropTypes,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-react/dist/assets";
import React, { useRef, useState } from "react";
import "@ui5/webcomponents-icons/dist/search";
import "@ui5/webcomponents-icons/dist/palette";
import { getTheme, setTheme } from "@ui5/webcomponents-base/dist/config/Theme";

const themesData = [
  { name: "sap_horizon", description: "SAP Horizon" },
  { name: "sap_horizon_dark", description: "SAP Horizon Dark" },
  { name: "sap_fiori_3", description: "Quartz Light" },
  { name: "sap_fiori_3_dark", description: "Quartz Dark" },
];

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
      <ResponsivePopover
        ref={buttonThemeRef}
        open={toggleThemePopUp}
        headerText="Available Themes:"
      >
        <List>
          {themesData.map((theme) => (
            <ListItemStandard
              key={theme.name}
              onClick={() => {
                setCurrentTheme(theme.name);
                setTheme(theme.name);
                setToggleThemePopUp(!toggleThemePopUp);
              }}
              selected={currentTheme === theme.name}
              icon="palette"
            >
              {theme.description}
            </ListItemStandard>
          ))}
        </List>
      </ResponsivePopover>
    </>
  );
}

// function onSelectTheme() {}
