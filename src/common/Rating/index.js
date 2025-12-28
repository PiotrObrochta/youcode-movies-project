import { Star } from "../Star";
import { RateContainer, RateNumber, SmallerText } from "./styled";

const Rating = ({ rate, votes, description = false }) => (
    <RateContainer $description={description}>
        <Star $description={description}/>
        <RateNumber $description={description}>{rate.toFixed(1).toString().replace(".", ",")}</RateNumber>
        <SmallerText $alignEnd $description={description}>/ 10</SmallerText>
        <SmallerText $description={description} $votes>{votes} votes</SmallerText>
    </RateContainer>
);


export default Rating;