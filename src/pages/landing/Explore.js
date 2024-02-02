import React from "react";
import GetExporeLogic from "../../Logic/Explore/getEvents";
import EventCarousel from "../../components/EventCarousel";
import Loading from "../../components/Loading";
import { categories } from "../../Logic/EventsLogic/categories";

function Explore() {
  const {
    events,
    offlineEvent,
    onlineEvent,
    loading,
    error,
    setSearchParams,
    category,
  } = GetExporeLogic();

  if (loading) return <Loading />;

  return (
    <section className="container py-4 md:py-16">
      <h1 className="pb-6 text-2xl md:text-4xl font-bold text-center md:text-left">Explore the events happening at SRM KTR Campus</h1>
      <h1 className="pb-5 text-xl font-bold">Categories</h1>
      <div className="flex gap-5 mb-8 items-center flex-wrap text-neutral-500 font-bold">
      {[{ label: "All" }, ...categories]?.map((item, index) => (
          <button
          onClick={(e) => {
            e.preventDefault();
            if (item?.label === "All") setSearchParams((prev) => ({}));
            else
              setSearchParams((prev) => ({ ...prev, category: item?.label }));
          }}
          className={`text-sm ${
            (category === item.label || item.label === "All") &&
            "text-primary"
          }`}
        >
          {item?.label}
        </button>
        ))}
      </div>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          {events?.length > 0 ? (
            <EventCarousel events={events} title={"All"} />
          ) : (
            <div className="text-white" style={{ fontSize: "40px", fontWeight: "bold", textAlign: "center" }}>
  <span className="bg-black rounded-full px-4 py-2 flex flex-col items-center justify-center">
    <span>⚠️ NO EVENTS POSTED</span>
    <span className="mt-1 text-base">Wait for the organiser to post</span>
  </span>
</div>
          )}
          {/* {events?.length > 0 ? (
            <EventCarousel events={events} title={"Latest Added"} />
          ) : (
            <div>No events posted</div>
          )} */}
          {offlineEvent?.length > 0 && (
            <EventCarousel events={offlineEvent} title={"Offline"} />
          )}
          {onlineEvent?.length > 0 && (
            <EventCarousel events={onlineEvent} title={"Online"} />
          )}
        </>
      )}
    </section>
  );
}

export default Explore;
