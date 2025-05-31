import { ProjectStatus } from "generated/prisma";

 const translateStatus = (status: ProjectStatus) => {
    switch (status) {
      case "completed":
        return "Selesai";
      case "in_progress":
        return "Sedang Berjalan";
      case "pending":
        return "Menunggu";
      default:
        return status;
    }
  }

  export default translateStatus;