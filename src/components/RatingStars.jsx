import React from "react";
import { Star } from "lucide-react";

const RatingStars = ({ rating = 0, size = 16 }) => {
  const filled = Math.floor(rating);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < filled ? "fill-amber-500 text-amber-500" : "text-amber-300"}
        />
      ))}
    </div>
  );
};

export default RatingStars;
