import "./Show.css";
export default function Show({ selectedMode }) {
  return (
    <>
      <div className="blind_show">
        <img
          alt="big pic"
          className="imageWindow"
          src={selectedMode}
          width="400"
          height="350px"
        />
      </div>
    </>
  );
}
