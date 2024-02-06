import React from "react";
import { Link } from "react-router-dom";

function ExploreEventCard({
    title,
    description,
    category,
    image,
    location,
    usernamee,
    $id,
    medium,
    startDate,
    endDate,
    webyurl,
    lumaurl
}) {
    const start = new Date(startDate?.split('+')[0])
    startDate = start.getDate()
    startDate = `${startDate <= 9 ? '0'+startDate : startDate}`
    const month = start.toDateString().slice(4,7).toUpperCase()

  return <Link to={`/event/${$id}`} className="w-full">
        <div className="relative">
            <img
                src={image}
                alt={title}
                className="object-cover w-full rounded-lg aspect-video"
            />
            <div className="absolute m-2 rounded text-sm top-0 right-0 text-center font-semibold bg-white shadow p-2">
                <h3>{startDate}</h3>
                <p>{month}</p>
            </div>
            <div className="absolute m-2 rounded text-xs bottom-0 left-0 text-center bg-white shadow p-2" style={{fontWeight:"bold"}}>
                <p>{category}</p>
            </div>
        </div>
        <div className="py-2">
    <h1 className="font-bold" style={{ fontSize: "20px", whiteSpace: 'normal' }}>{title}</h1>
    <h1 className="font-bold" style={{ fontSize: "14px", whiteSpace: 'normal' }}>{usernamee}</h1>
    <button className="primary-btn" style={{
  border: "1px solid",
  borderRadius: "20px",
  height: "20px",
  width: "60%",
  color: "black",
  borderColor: "white",
  backgroundColor: "white",
  fontWeight: "bold",
  marginTop: "0px"
}}>
  {lumaurl || webyurl ? (
    <span style={{ fontWeight: "bolder", color: "green", fontSize: "12px" }}>
      Registrations Open
    </span>
  ) : (
    <span style={{ fontWeight: "bolder", color: "red", fontSize: "12px" }}>
      Registrations Closed
    </span>
  )}
</button>
    {/* <p className="text-sm text-gray-500 line-clamp-3">{description}</p> */}
</div>
  </Link>;
}

export default ExploreEventCard;
