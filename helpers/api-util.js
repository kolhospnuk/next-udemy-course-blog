
export const getAllEvents = async () => {
  const res = await fetch('https://next-udemy-course-21424-default-rtdb.firebaseio.com/events.json');
  const data = await res.json();
  console.log(data);

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data
    })
  }

  return events;
}

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}