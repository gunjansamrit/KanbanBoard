import axios from "axios";

export const fetchTicketsAndUsers = async () => {
  try {
    const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
    const { tickets, users } = response.data;


    const userMap = users.reduce((acc, user) => {
      acc[user.id] = {
        name: user.name,
        available: user.available,  
      };
      return acc;
    }, {});

   
    const enrichedTickets = tickets.map((ticket) => {
      const user = userMap[ticket.userId] || { name: "Unknown", available: false };
      return {
        ...ticket,
        userName: user.name,
        available: user.available,
      };
    });

    return enrichedTickets;
  } catch (error) {
    console.error("Error fetching tickets and users:", error);
    return [];
  }
};
