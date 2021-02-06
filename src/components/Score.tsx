import { ConnectedProps } from "react-redux";
import { connector } from "../containers/Score";

type Props = ConnectedProps<typeof connector>;

const Score = (props: Props) => {
    return (
        <div style={{ flexGrow: 1, textAlign: "right" }}>
            <p>
                Wins: <span>{props.wins}</span>
                <br />
                Loses: <span>{props.loses}</span>
            </p>
        </div>
    );
};

export default Score;
