import RestaurentCard,  { withPromotedLabel } from "../components/RestaurentCard"
import { render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/DummyResData.json"
import MOCK_DATA2 from "../mocks/DummyResData2.json"
import "@testing-library/jest-dom"


test ("is the Restaurent Card loaded or not", ()=>{

    render(<RestaurentCard  resData={MOCK_DATA}/>)

    const resName = screen.getByText("Pizza Paradise");

    expect(resName).toBeInTheDocument();
})

const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);

test ("should render RestaurentCard component with Promoted Label", ()=>{

    render(<RestaurantCardPromoted resData={MOCK_DATA2}/> )

    const promoted = screen.getByText("Promoted");

    expect(promoted).toBeInTheDocument();

})
