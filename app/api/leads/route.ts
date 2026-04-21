import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir, readFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const validRoles = [
  "Student",
  "Working Professional",
  "Freelancer",
  "Entrepreneur",
  "Other"
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, role, goal, source } = body;

    // 1. Validate required fields
    if (
      typeof name !== "string" || name.trim() === "" ||
      typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email) ||
      typeof phone !== "string" || phone.trim() === "" ||
      !validRoles.includes(role) ||
      typeof goal !== "string" || goal.trim() === "" || goal.length > 200
    ) {
      return NextResponse.json(
        { error: "Missing or invalid fields" },
        { status: 400 }
      );
    }

    // 2. Prepare payload
    const leadData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      role,
      goal: goal.trim(),
      source: source || "Other", // Source is not required, safely default if undefined/empty
      status: "Applied",
      appliedAt: new Date().toISOString(),
      batch: "Batch 14"
    };

    // 3. Handle Development vs Production routing
    if (false) {
      // Local fallback (Development only)
      const seedDir = path.join(process.cwd(), "seed");
      const leadsFile = path.join(seedDir, "leads.json");

      if (!existsSync(seedDir)) {
        await mkdir(seedDir, { recursive: true });
      }

      let leads: any[] = [];
      if (existsSync(leadsFile)) {
        try {
          const fileContent = await readFile(leadsFile, "utf-8");
          leads = JSON.parse(fileContent);
        } catch (e) {
          // ignore parsing error, will start with empty array buffer
        }
      }

      leads.push(leadData);
      await writeFile(leadsFile, JSON.stringify(leads, null, 2));

      return NextResponse.json({ success: true });
    } else {
      // Production: Write to Notion Database
      if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
        console.error("Missing Notion environment variables in production");
        return NextResponse.json(
          { error: "Failed to save application" },
          { status: 500 }
        );
      }

      const notionResponse = await fetch("https://api.notion.com/v1/pages", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          parent: { database_id: process.env.NOTION_DATABASE_ID },
          properties: {
            "Name": {
              title: [ { text: { content: leadData.name } } ]
            },
            "Email": {
              email: leadData.email
            },
            "Phone": {
              phone_number: leadData.phone
            },
            "Role": {
              select: { name: leadData.role }
            },
            "Goal": {
              rich_text: [ { text: { content: leadData.goal } } ]
            },
            "Source": {
              select: { name: leadData.source }
            },
            "Status": {
              select: { name: leadData.status }
            },
            "Applied at": {
              date: { start: leadData.appliedAt }
            },
            "Batch": {
              select: { name: leadData.batch }
            }
          }
        })
      });

      if (!notionResponse.ok) {
        const errorText = await notionResponse.text();
        console.error("Notion API Error:", errorText);
        return NextResponse.json(
          { error: "Failed to save application" },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to save application" },
      { status: 500 }
    );
  }
}

