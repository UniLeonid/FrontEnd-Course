import Image from "next/image";
import gitHubLogo from "/public/contacts/github.svg";
import gitLabLogo from "/public/contacts/gitlab.svg";
import telegramLogo from "/public/contacts/telegram.svg";
import emailLogo from "/public/contacts/email.svg";
import InformationBlock from "@/components/InformationBlock";

export function BioInformationBlock() {
  return (
    <InformationBlock>
      <p>
        <b>Key skills:</b> Java, JUnit, Spring Framework, Hibernate, SQL,
        Gradle, Maven, Kafka, RabbitMQ, Git
      </p>
      <p>
        <b>Languages:</b> Java, C#, Python, JavaScript, Haskell
      </p>
      <p>
        <b>Hobby:</b> books, teaching programming, learning internals of Java
        and Spring Framework
      </p>
    </InformationBlock>
  );
}

export function ProjectsInformationBlock() {
  return (
    <InformationBlock>
      <ul>
        <li>
          <a href="https://smashup.ru">
            <b>SmashUp.ru</b>
          </a>
          <a> — Mashup streaming service</a>
        </li>
        <li>
          <a href="https://skyblockm.ru">
            <b>SkyBlockM.ru</b>
          </a>
          <a> — Hi-Tech Minecraft server</a>
        </li>
      </ul>
    </InformationBlock>
  );
}

export function LibrariesInformationBlock() {
  return (
    <InformationBlock>
      <ul>
        <li>
          <a href="https://github.com/LeonidMem/ORMM">
            <b>ORMM</b>
          </a>
          <a> — Light-weight ORM for Java</a>
        </li>
        <li>
          <a href="https://github.com/LeonidMem/SimpleBeans">
            <b>SimpleBeans</b>
          </a>
          <a> — Spring-like beans for Java</a>
        </li>
        <li>
          <a href="https://github.com/LeonidMem/EnumExtender">
            <b>EnumExtender</b>
          </a>
          <a> — Lightweight library for extending enums in Java at runtime</a>
        </li>
        <li>
          <a href="https://github.com/LeonidMem/FastNBT">
            <b>FastNBT</b>
          </a>
          <a> — As fast as possible library for Minecraft NBT</a>
        </li>
      </ul>
    </InformationBlock>
  );
}

export function ContactsInformationBlock() {
  return (
    <InformationBlock id="contacts-block">
      <a id="gh-link" href="https://github.com/LeonidMem" target="_blank">
        <Image className="contacts-logo" src={gitHubLogo} alt="GitHub logo" />
      </a>
      <a id="gl-link" href="https://gitlab.com/LeonidMem" target="_blank">
        <Image className="contacts-logo" src={gitLabLogo} alt="GitLab logo" />
      </a>
      <a id="tg-link" href="https://t.me/leonidmem" target="_blank">
        <Image
          className="contacts-logo inverted-logo"
          src={telegramLogo}
          alt="Telegram logo"
        />
      </a>
      <a id="email" href="mailto:admin@smashup.ru" target="_blank">
        <Image
          className="contacts-logo inverted-logo"
          src={emailLogo}
          alt="Email logo"
        />
      </a>
    </InformationBlock>
  );
}
