import { Priority } from "generated/prisma";

 const translatePriority = (priority: Priority) => {
    switch (priority) {
      case "urgent":
        return "Mendesak";
      case "high":
        return "Tinggi";
      case "normal":
        return "Normal";
      case "low":
        return "Rendah";
      default:
        return priority;
    }
  }
export default translatePriority