import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middlewares
  app.use(express.json());

  // API Route: Send customer inquiry to target email
  app.post("/api/inquiry", async (req, res) => {
    const { name, company, email, phone, interest, message, assembledLine } = req.body;

    if (!name || !company || !email) {
      return res.status(400).json({
        success: false,
        error: "Required fields (name, company, email) are missing."
      });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    const receiverEmail = process.env.EMAIL_RECEIVER || "bauzondiode@gmail.com";

    console.log(`[Inquiry Received] ${name} from ${company} (Email: ${email})`);

    // If no access key is defined, we'll simulate the successful queuing.
    // This allows the preview to stay stable and informs the user about how to complete setup.
    if (!accessKey) {
      console.log(`Simulating SMTP dispatch since no WEB3FORMS_ACCESS_KEY is set.`);
      return res.json({
        success: true,
        simulated: true,
        message: `Inquiry successfully logged! To receive actual emails from this live form to ${receiverEmail}, please add a free WEB3FORMS_ACCESS_KEY to the AI Studio Secrets panel. (Refer to .env.example)`
      });
    }

    // Proxy the request to Web3Forms API to send real emails safely.
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[BOOMERANG CORP INQUIRY] from ${name} of ${company}`,
          from_name: "Boomerang Portal Mailer",
          name,
          email,
          phone: phone || "Not specified",
          interest: interest || "General Machinery Interest",
          message: message || "No additional text provided.",
          engineered_assembly_line: assembledLine && assembledLine.length > 0 ? assembledLine.join(", ") : "None assembled"
        })
      });

      const data = await response.json() as any;
      if (data.success) {
        return res.json({
          success: true,
          simulated: false,
          message: `Inquiry successfully delivered to ${receiverEmail}`
        });
      } else {
        throw new Error(data.message || "Web3Forms API rejected the transmission.");
      }
    } catch (error: any) {
      console.error("Email proxy forwarding error:", error);
      return res.status(500).json({
        success: false,
        error: error.message || "Failed to transmit inquiry to server."
      });
    }
  });

  // Vite middleware for development vs Serve static files for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Emails will target: ${process.env.EMAIL_RECEIVER || "bauzondiode@gmail.com"}`);
  });
}

startServer();
