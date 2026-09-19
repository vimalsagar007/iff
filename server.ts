import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set. Please configure GEMINI_API_KEY in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "25mb" }));

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Indian Freedom Fighters Audio Engine" });
  });

  // Music generation endpoint using Lyria models
  app.post("/api/generate-music", async (req, res) => {
    try {
      const { prompt, model = "lyria-3-clip-preview" } = req.body;
      if (!prompt || typeof prompt !== "string") {
        return res.status(400).json({ error: "A valid music prompt is required." });
      }

      const selectedModel =
        model === "lyria-3-pro-preview" ? "lyria-3-pro-preview" : "lyria-3-clip-preview";

      const ai = getAiClient();

      console.log(`[Lyria Music Generation] Requesting model ${selectedModel} with prompt: "${prompt}"`);

      const response = await ai.models.generateContentStream({
        model: selectedModel,
        contents: prompt,
      });

      let audioBase64 = "";
      let lyrics = "";
      let mimeType = "audio/wav";

      for await (const chunk of response) {
        const parts = chunk.candidates?.[0]?.content?.parts;
        if (!parts) continue;

        for (const part of parts) {
          if (part.inlineData?.data) {
            if (!audioBase64 && part.inlineData.mimeType) {
              mimeType = part.inlineData.mimeType;
            }
            audioBase64 += part.inlineData.data;
          }
          if (part.text && !lyrics) {
            lyrics = part.text;
          }
        }
      }

      if (!audioBase64) {
        return res.status(502).json({
          error: "Lyria model response did not contain audio data.",
        });
      }

      res.json({
        success: true,
        audioBase64,
        mimeType,
        lyrics,
        model: selectedModel,
      });
    } catch (err: any) {
      console.error("[Lyria Music Generation Error]:", err);
      const errorMessage = err?.message || "Failed to generate music with Lyria.";
      res.status(500).json({ error: errorMessage });
    }
  });

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Indian Freedom Fighters Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
