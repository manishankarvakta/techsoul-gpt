import React from "react";
import { Card, CardContent } from "@/components/ui/card";
const Suggestion = () => {
  return (
    <div className="w-96 flex gap-2">
      <Card className="p-6 text-center cursor-pointer hover:shadow-md">
        <CardContent>
          <p>Create a cartoon illustration of my pet</p>
        </CardContent>
      </Card>

      <Card className="p-6 text-center cursor-pointer hover:shadow-md">
        <CardContent>
          <p>Make a recommendation based on my data</p>
        </CardContent>
      </Card>

      <Card className="p-6 text-center cursor-pointer hover:shadow-md">
        <CardContent>
          <p>Count the number of items in an image</p>
        </CardContent>
      </Card>

      <Card className="p-6 text-center cursor-pointer hover:shadow-md">
        <CardContent>
          <p>Content calendar for TikTok</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Suggestion;
