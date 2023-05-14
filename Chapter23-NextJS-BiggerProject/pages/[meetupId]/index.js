import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Mont-Saint-Michel_vu_du_ciel.jpg/1920px-Mont-Saint-Michel_vu_du_ciel.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a First meetup"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "First Meetup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Mont-Saint-Michel_vu_du_ciel.jpg/1920px-Mont-Saint-Michel_vu_du_ciel.jpg",
        address: "Some Street 5, Some City",
        description: "This is a First meetup",
      },
    },
  };
};

export default MeetupDetails;
