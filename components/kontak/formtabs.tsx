"use client";

import { Button, ButtonGroup } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Link } from "@nextui-org/link";
import { FC, useState } from "react";

import { GmailIcon, RedirectIcon, WhatsappIcon } from "../icons";

import { EmailFormData, WhatsappFormData } from "@/types";
import { createMailtoLink, createWhatsappLink } from "@/utils";
import { siteConfig } from "@/config/site";

export const FormTabs: FC = () => {
  const [emailFormData, setEmailFormData] = useState<EmailFormData>({
    name: "",
    subject: "",
    text: "",
  });
  const [whatsappFormData, setWhatsappFormData] = useState<WhatsappFormData>({
    name: "",
    text: "",
  });

  const handleChangeGmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setEmailFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleGmail = () => {
    const mailtoLink = createMailtoLink(emailFormData!);

    window.location.href = mailtoLink;
  };

  const handleChangeWhatsapp = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setWhatsappFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleWhatsapp = () => {
    const whatsappLink = createWhatsappLink(whatsappFormData!);

    window.location.href = whatsappLink;
  };

  return (
    <Tabs aria-label="Forms Option">
      <Tab
        key="email"
        className="w-full max-w-xl flex flex-col gap-4"
        title="Email"
      >
        <Input
          isRequired
          label="Nama"
          name="name"
          type="text"
          value={emailFormData.name}
          onChange={handleChangeGmail}
        />
        <Input
          isRequired
          label="Judul"
          name="subject"
          type="text"
          value={emailFormData.subject}
          onChange={handleChangeGmail}
        />
        <Textarea
          isRequired
          label="Pesan"
          name="text"
          placeholder="Tuliskan pesan anda dengan detail"
          value={emailFormData.text}
          onChange={handleChangeGmail}
        />
        <ButtonGroup>
          <Button
            color="primary"
            startContent={<GmailIcon size={18} />}
            onClick={handleGmail}
          >
            Kirim
          </Button>
          <Button
            isExternal
            as={Link}
            color="default"
            endContent={<RedirectIcon size={18} />}
            href={`mailto:${siteConfig.socials.gmail}`}
          >
            Buka Gmail
          </Button>
        </ButtonGroup>
      </Tab>
      <Tab
        key="whatsapp"
        className="w-full max-w-xl flex flex-col gap-4"
        title="Whatsapp"
      >
        <Input
          isRequired
          label="Nama"
          name="name"
          type="text"
          value={whatsappFormData.name}
          onChange={handleChangeWhatsapp}
        />
        <Textarea
          isRequired
          label="Pesan"
          name="text"
          placeholder="Tuliskan pesan anda dengan detail"
          value={whatsappFormData.text}
          onChange={handleChangeWhatsapp}
        />
        <ButtonGroup>
          <Button
            color="success"
            startContent={<WhatsappIcon size={18} />}
            onClick={handleWhatsapp}
          >
            Kirim
          </Button>
          <Button
            isExternal
            as={Link}
            color="default"
            endContent={<RedirectIcon size={18} />}
            href={`https://wa.me/${siteConfig.socials.whatsapp}`}
          >
            Buka Whatsapp
          </Button>
        </ButtonGroup>
      </Tab>
    </Tabs>
  );
};
