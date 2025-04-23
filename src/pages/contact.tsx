
import React, { useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";

const b64encode = (str: string) => {
  if (typeof btoa !== "undefined") return btoa(unescape(encodeURIComponent(str)));
  // Node/polyfill fallback
  return Buffer.from(str, "utf8").toString("base64");
};

const MessagePage = () => {
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const [encoded, setEncoded] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleEncode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !recipient.trim()) return;
    const joined = `${message}*${recipient}💀`;
    const b64 = b64encode(joined);
    setEncoded(b64);
    setShowResult(true);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!encoded) return;
    try {
      await navigator.clipboard.writeText(encoded);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full py-12">
      <div className="glass p-8 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Encode a Message</h2>
        <form onSubmit={handleEncode} className="space-y-4">
          <Input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Recipient's contact name"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
          <Button variant="default" type="submit" className="w-full">
            Encode & Show
          </Button>
        </form>
        {showResult && (
          <Alert variant="default" className="mt-6">
            <AlertTitle>Encoded Code</AlertTitle>
            <AlertDescription className="break-all select-all font-mono text-base mt-2 mb-3">
              {encoded}
            </AlertDescription>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleCopy}
              className="flex items-center gap-2"
            >
              <Copy size={16} />
              {copied ? "Copied!" : "Copy Code"}
            </Button>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default MessagePage;
