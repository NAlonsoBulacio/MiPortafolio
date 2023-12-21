import axios from "axios";

const sendContactEvent = async () => {
  const eventTime = Math.round(new Date() / 1000);
  const accessToken =
    "EAAypR7mz2VQBO0r3zXqiQPcbJuZCXBc5aj82vTiBiuqbxmnI1HZA9Y8ouPBjJ9t9ubfZBg36vTqoD57hCx43MPJz0p955xpTlbXbnA6NGf7ZCuL9l8Tk03q1tN9ZBhe2fTE53vzL6pFUuXVgx0OdNls7chPOMRPLbZB5aoc0nDxkoKI9Kzqg5Mi4wS0nrt3WboQwZDZD";
  const pixel = "1271593290050934";

  const eventData = {
        "data": [
           {
              "event_name": "Contact",
              "event_time": 1703163232,
              "action_source": "website",
           }
        ],
        "test_event_code": "TEST123"
  };
  console.log(eventData);

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v18.0/${pixel}/events?access_token=${accessToken}`,
      eventData
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error al enviar el evento:", error);
  }
};

export default sendContactEvent;
