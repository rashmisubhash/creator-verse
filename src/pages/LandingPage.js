import "./common.css";
import ShowCreators from "./ShowCreators";

const LandingPage = ({ creators }) => {
  return (
    <div>
      {/* List of Creators to be shown */}
      <ShowCreators creators={creators} />
    </div>
  );
};

export default LandingPage;
