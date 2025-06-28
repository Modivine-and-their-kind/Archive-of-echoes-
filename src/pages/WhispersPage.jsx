import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

export default function WhispersPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      <h1 className="text-4xl font-bold text-purple-400">Whispers</h1>
      <p className="text-gray-300">Archived messages and images from the echoing minds.</p>

      <Link to="/" className="text-purple-400 underline block pb-4">← Back to Submit</Link>

      <Card className="bg-zinc-800 border border-purple-500 rounded-2xl shadow-md">
        <CardContent>
          <p className="text-sm text-gray-300 italic">Sample whisper from the archive...</p>
        </CardContent>
      </Card>
    </div>
  );
}