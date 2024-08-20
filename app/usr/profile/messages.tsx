"use client";

import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Messages() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const message = searchParams.get("message");
  const c = searchParams.get("c");

  const [showMessage, setShowMessage] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (message) setShowMessage(true);
    if (error) setShowError(true);
    const i = setTimeout(() => {
      setShowMessage(false);
      setShowError(false);
    }, 5 * 1000);

    return () => {
      clearTimeout(i);
    };
  }, [error, message, c]);

  return (
    <>
      <motion.div
        animate={{
          y: "0%",
          opacity: 1,
        }}
        className={`m-4 fixed bottom-0 right-0 ${showError || "hidden"}`}
        initial={{
          y: "100%",
          opacity: 0,
        }}
      >
        <Card className="!text-white border-1 border-danger">
          <div className="text-danger flex items-center p-3 gap-4">
            <p className="max-w-sm text-sm">{error ? error : "Error!"}</p>
            <Button
              isIconOnly
              color="danger"
              onClick={() => setShowError(false)}
            >
              X
            </Button>
          </div>
        </Card>
      </motion.div>
      <motion.div
        animate={{
          y: "0%",
          opacity: 1,
        }}
        className={`m-4 fixed bottom-0 right-0 ${showMessage || "hidden"}`}
        initial={{
          y: "100%",
          opacity: 0,
        }}
      >
        <Card className="!text-white border-1 border-success">
          <div className="text-success flex items-center p-3 gap-4">
            <p className="max-w-sm text-sm">{message ? message : "Success!"}</p>
            <Button
              isIconOnly
              color="danger"
              size="sm"
              onClick={() => setShowMessage(false)}
            >
              X
            </Button>
          </div>
        </Card>
      </motion.div>
    </>
  );
}
