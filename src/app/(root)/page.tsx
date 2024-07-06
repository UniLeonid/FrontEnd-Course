"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "/public/logo.png";
import Button from "@/components/Button";
import {
  BioInformationBlock,
  ProjectsInformationBlock,
  LibrariesInformationBlock,
  ContactsInformationBlock,
} from "@/components/InformationBlocks";

export default function PortfolioPage() {
  const [currentBlock, setCurrentBlock] = useState<{
    id?: number;
    element?: React.JSX.Element;
    height?: number;
  }>({});

  const currentBlockSetter = (
    id: number,
    element: React.JSX.Element,
    height: number
  ) => {
    return () => {
      if (currentBlock?.id !== id) {
        setCurrentBlock({ id, element, height });
      } else {
        setCurrentBlock({ element });
      }
    };
  };

  const containerStyle = currentBlock.height
    ? { height: currentBlock.height }
    : {};

  return (
    <main>
      <div
        className="container"
        id="portfolio-container"
        style={containerStyle}
      >
        <Image className="non-copyable logo" src={logo} alt="Profile photo" />

        <div className="header">
          <h1>LeonidM | Java Developer</h1>

          <div className="non-copyable buttons">
            <Button
              onClick={currentBlockSetter(1, BioInformationBlock(), 288)}
              selected={currentBlock.id === 1}
            >
              About me
            </Button>
            <Button
              onClick={currentBlockSetter(2, ProjectsInformationBlock(), 185)}
              selected={currentBlock.id === 2}
            >
              Projects
            </Button>
            <Button
              onClick={currentBlockSetter(3, LibrariesInformationBlock(), 230)}
              selected={currentBlock.id === 3}
            >
              Libraries
            </Button>
            <Button
              onClick={currentBlockSetter(4, ContactsInformationBlock(), 200)}
              selected={currentBlock.id === 4}
            >
              Contacts
            </Button>
          </div>
        </div>

        {currentBlock.element}
      </div>
    </main>
  );
}
