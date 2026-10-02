"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const starters = [
  "What kind of AI products have you led?",
  "Tell me about your experience at Wipro.",
  "What are your areas of expertise?",
];

export function CareerChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const conversationEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    conversationEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function sendMessage(text: string) {
    const content = text.trim();
    if (!content || isLoading) return;

    const userMessage: Message = { role: "user", content };
    const nextMessages = [...messages, userMessage].slice(-12);
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const result: { answer?: string; error?: string } = await response.json();
      if (!response.ok || !result.answer) {
        throw new Error(result.error ?? "The AI could not respond. Please try again.");
      }
      setMessages((current) => [
        ...current,
        { role: "assistant", content: result.answer! },
      ]);
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Connection problem. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  function submitStarter(prompt: string) {
    void sendMessage(prompt);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      {isOpen ? (
        <section
          aria-label="Chat with Rafeek's digital twin"
          className="career-chat-panel mb-3 flex h-[min(620px,calc(100dvh-110px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101116] shadow-2xl shadow-black/50"
        >
          <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <p className="font-display text-sm font-semibold text-foreground">
                Rafeek&apos;s AI Twin
              </p>
              <p className="mt-1 flex items-center gap-2 text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Career questions, answered
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-muted transition hover:bg-white/5 hover:text-foreground"
            >
              ×
            </button>
          </header>

          <div
            className="flex-1 space-y-4 overflow-y-auto px-4 py-5"
            aria-live="polite"
            aria-relevant="additions text"
          >
            {messages.length === 0 ? (
              <div className="pt-3">
                <p className="font-display text-xl font-medium leading-snug">
                  Curious about my career?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Ask me about the products I&apos;ve built, the teams I&apos;ve led,
                  or the work I care about.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  {starters.map((starter) => (
                    <button
                      key={starter}
                      type="button"
                      disabled={isLoading}
                      onClick={() => submitStarter(starter)}
                      className="rounded-lg border border-white/10 px-3 py-2.5 text-left text-xs leading-relaxed text-foreground/80 transition hover:border-accent/50 hover:bg-accent/5 disabled:opacity-50"
                    >
                      {starter}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[88%] whitespace-pre-wrap rounded-xl px-3.5 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "ml-auto bg-accent text-[#07110f]"
                      : "border border-white/10 bg-white/[0.04] text-foreground/90"
                  }`}
                >
                  {message.content}
                </div>
              ))
            )}
            {isLoading ? (
              <p className="text-xs text-muted" role="status">
                Thinking…
              </p>
            ) : null}
            {error ? (
              <div className="rounded-lg border border-red-400/20 bg-red-400/5 px-3 py-2 text-xs leading-relaxed text-red-200">
                {error}
                <button
                  type="button"
                  className="ml-2 underline underline-offset-2"
                  onClick={() => setError("")}
                >
                  Dismiss
                </button>
              </div>
            ) : null}
            <div ref={conversationEnd} />
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              void sendMessage(input);
            }}
            className="flex items-center gap-2 border-t border-white/10 p-3"
          >
            <label className="sr-only" htmlFor="career-chat-input">
              Ask a question about Rafeek&apos;s career
            </label>
            <input
              id="career-chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={2000}
              placeholder="Ask about my career..."
              className="h-11 min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm text-foreground outline-none placeholder:text-muted/70 focus:border-accent/60"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="h-11 rounded-lg bg-accent px-4 text-sm font-semibold text-[#07110f] transition hover:bg-accent/85 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Send
            </button>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close AI twin chat" : "Chat with my AI twin"}
        className="ml-auto flex h-14 items-center gap-2.5 rounded-full border border-accent/40 bg-[#101116] px-5 text-sm font-medium text-foreground shadow-lg shadow-black/30 transition hover:border-accent hover:bg-[#17191d]"
      >
        <span aria-hidden className="text-accent">✳</span>
        {isOpen ? "Close chat" : "Ask my AI twin"}
      </button>
    </div>
  );
}