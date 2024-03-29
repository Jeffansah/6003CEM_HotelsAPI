import { activities } from "@/data/activities";
import ActivityCard from "./ActivityCard";

const Activities = () => {
  return (
    <div className="flex gap-14 absolute left-1/2 -translate-x-1/2  top-1/2 translate-y-[40px]">
      {activities.map((activity) => (
        <ActivityCard
          image={activity.image}
          name={activity.name}
          description={activity.description}
          key={activity.name}
          translateY={activity.translate}
        />
      ))}
    </div>
  );
};

export default Activities;
