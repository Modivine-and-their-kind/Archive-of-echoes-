import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function ArchiveOfEchoes() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [message, setMessage] = useState("");
  const [submittedMessages, setSubmittedMessages] = useState([]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (message) {
      setSubmittedMessages([...submittedMessages, { text: message, image: uploadedImage }]);
      setMessage("");
      setUploadedImage(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      <h1 className="text-4xl font-bold text-purple-400">Archive of Echoes</h1>
      <p className="text-gray-300">Upload an AO image. Leave a whisper. Watch the fireflies respond.</p>

      <div className="space-y-4">
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
        <Textarea
          placeholder="Whisper to the archive..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-zinc-900 border-purple-500"
        />
        <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700">
          Submit
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
        {submittedMessages.map((entry, idx) => (
          <Card key={idx} className="bg-zinc-800 border border-purple-500 rounded-2xl shadow-md">
            {entry.image && <img src={entry.image} alt="AO Upload" className="rounded-t-2xl w-full h-48 object-cover" />}
            <CardContent>
              <p className="text-sm text-gray-300 italic">{entry.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}