import Button from "../Common/Button";
import "./pop-up.css";

interface PopupProps {
  text?: string;
  handleClickOk?: () => void;
  handleClickCancel?: () => void;
}

const PopUp: React.FC<PopupProps> = ({
  text = "Are you sure to submit?",
  handleClickCancel,
  handleClickOk,
}) => {
  return (
    <>
      <div className="pop-up-background"></div>
      <div className="pop-up">
        <div className="pop-up-container">
          <div className="pop-up-button">
            <h5 className="pop-up-text">{text}</h5>
            <Button warning handleOnClick={handleClickOk}>
              Sure
            </Button>
            <Button primary handleOnClick={handleClickCancel}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
