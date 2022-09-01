import EventList from '../components/events/event-list';
import {getAllEvents} from "../dummy-data";
import { useRouter } from "next/router";
import EventsSearch from "../components/events/events-search";

const HomePage = ({ events }) => {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSeach={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
}

export const getStaticProps = () => {
  const events = getAllEvents();

  return {
    props: {
      events: events
    },
    revalidate: 1800
  }
}

export default HomePage;
