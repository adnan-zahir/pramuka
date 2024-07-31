"use client";

import { Card, CardBody } from "@nextui-org/card";
import { useSearchParams } from "next/navigation";

export default function Messages() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const message = searchParams.get("message");

  return (
    <>
      {error && (
        <Card
          isBlurred
          className="bg-transparent border-red-400 p-4 text-center"
        >
          <CardBody>
            <p>{error}</p>
          </CardBody>
        </Card>
      )}
      {message && (
        <Card
          isBlurred
          className="bg-transparent border-green-400 p-4 text-center"
        >
          <CardBody>
            <p>{message}</p>
          </CardBody>
        </Card>
      )}
    </>
  );
}
